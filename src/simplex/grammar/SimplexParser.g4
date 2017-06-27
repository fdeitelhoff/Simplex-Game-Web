parser grammar SimplexParser;

options { tokenVocab=SimplexLexer; }

/*
 * Start rule.
*/

simplex
    : typeDeclaration
    | typeless
    ;

/*
 * Defintion of own types.
*/

typeDeclaration
    : (TYPE ID typeBody* END)
	;

typeBody
    : assignmentStatement
    | actionDeclaration
    | ON CREATE block END
    ;

/*
 * Files without own types.
*/

typeless
    : statement+
    ;

/*
 * Actions.
*/

actionDeclaration
	: ACTION name = ID (LEFT_PAREN (params += actionParameter (COMMA params += actionParameter)*)? RIGHT_PAREN)? (RETURNS ret = assignmentDeclarationTypes)? stmts = block END
	;

actionParameter
	: type = assignmentDeclarationTypes name = ID
	;

returnStatement
	: RETURN exp = expression
	;

block
 	: statement* returnStatement?
	;

/*
 * Statements.
*/

statement
    : stmt = ifStatement           # stmtIf
    | stmt = loopStatement         # stmtLoop
    | stmt = assignmentStatement   # stmtAssignment
    | stmt = actionDeclaration     # stmtActionDeclaration
    | stmt = actionCall            # stmtActionCall
    ;

actionCall
    : ((type = fullQualifiedName | me = ME) COLON)? name = ID LEFT_PAREN exp = actionExpressions? RIGHT_PAREN
    ;

actionExpressions
	: exp += expression (COMMA exp += expression)*
    ;

assignmentStatement
    : type = assignmentDeclarationTypes name = ID EQUALITY exp = expression     # assignmentDeclaration
    | (ME COLON)? name = ID EQUALITY exp = expression                           # assignment
    ;

assignmentDeclarationTypes
    : ID
    | BOOLEAN_KEYWORD
    | INTEGER_KEYWORD
    | NUMBER_KEYWORD
    | TEXT_KEYWORD
    ;

fullQualifiedName
    : ids+=ID (PERIOD ids+=ID)*
    ;

/*
 * If statement and the repeat loop.
*/

ifStatement
	: IF exp = expression stmts = block elseifStatement* elseStatement? END
	;

elseifStatement
    : ELSEIF exp = expression stmts = block
    ;

elseStatement
    : ELSE stmts = block
    ;

loopStatement
    : REPEAT ((exp = expression type = TIMES) | (type = (WHILE | UNTIL) exp = expression)) stmts = block END
    ;

/*
 * Everything thats an expression.
*/

expression
    : value = BOOLEAN                                                                                        # expBoolean
    | value = INTEGER                                                                                        # expInteger
    | value = NUMBER                                                                                         # expNumber
    | value = TEXT                                                                                           # expString
    | name = ID                                                                                              # expID
    | symbol = MINUS expRight = expression                                                                   # expUnaryArithmetic
    | symbol = NOT expRight = expression                                                                     # expUnaryLogic
    | call = actionCall                                                                                      # expActionCall
    | LEFT_PAREN expCenter = expression RIGHT_PAREN                                                          # expParenthesis
    | expLeft = expression symbol = (MULTIPLY | DIVIDE | MODULO) expRight = expression                       # expBinaryArithmetic
    | expLeft = expression symbol = CONCATENATE expRight = expression                                        # expBinaryStringConcatenate
    | expLeft = expression symbol = (PLUS | MINUS) expRight = expression                                     # expBinaryArithmetic
    | expLeft = expression symbol = (GREATER | GREATER_EQUAL | LESS | LESS_EQUAL) expRight = expression      # expBinaryRelational
    | expLeft = expression symbol = (EQUALITY | NOTEQUALS) expRight = expression                             # expBinaryEquality
    | expLeft = expression symbol = AND expRight = expression                                                # expBinaryLogic
    | expLeft = expression symbol = OR expRight = expression                                                 # expBinaryLogic
    ;