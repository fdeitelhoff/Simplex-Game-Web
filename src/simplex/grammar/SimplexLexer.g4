lexer grammar SimplexLexer;

/*
 * Channel definition.
 * Input characters can be send to different channels to treat them differently.
*/

channels {
    WHITESPACE,
    COMMENT
}

/*
 * Keywords for datatypes.
*/

BOOLEAN_KEYWORD
	: 'boolean'
	;

INTEGER_KEYWORD
	: 'integer'
	;

NUMBER_KEYWORD
	: 'number'
	;

TEXT_KEYWORD
	: 'text'
	;

/*
 * Simple datatypes.
*/

BOOLEAN
    : 'true' | 'false'
    ;

INTEGER
    : '0'..'9'+
    ;

NUMBER
    : '0'..'9'+ (PERIOD ('0'..'9')*)?
    ;

TEXT
    : '"' ('\\"'|.)*? '"'
    ;

/*
 * Own types.
*/

TYPE
    : 'type'
    ;

ON
    : 'on'
    ;

CREATE
    : 'create'
    ;

/*
 * If-statement with elseif and else.
*/

IF
    : 'if'
    ;

END
    : 'end'
    ;

ELSEIF
    : 'elseif'
    ;

ELSE
    : 'else'
    ;

/*
 * Repeat-statement with times, while, and until
*/

WHILE
    : 'while'
    ;

TIMES
    : 'times'
    ;

REPEAT
    : 'repeat'
    ;

UNTIL
    : 'until'
    ;

/*
 * Compare operators.
*/

EQUALITY
    : '='
    ;

GREATER
    : '>'
    ;

GREATER_EQUAL
	: '>='
	;

LESS
    : '<'
    ;

LESS_EQUAL
	: '<='
	;

/*
 * Arithmetic operators.
*/

PLUS
    : '+'
    ;

CONCATENATE
    : '++'
    ;

MINUS
    : '-'
    ;

MULTIPLY
    : '*'
    ;

DIVIDE
    : '/'
    ;

MODULO
    : 'mod'
    ;

/*
 * Boolean operators.
*/

NOT
    : 'not'
	;

NOTEQUALS
	: 'not='
	;

AND
	: 'and'
	;

OR
    : 'or'
    ;

/*
 * Everything related to actions.
*/

ME
    : 'me'
    ;

PERIOD
    : '.'
    ;

ACTION
	: 'action'
	;

COLON
	: ':'
	;

LEFT_PAREN
	: '('
	;

RIGHT_PAREN
	: ')'
	;

COMMA
    : ','
    ;

RETURNS
    : 'returns'
    ;

RETURN
    : 'return'
    ;

NOW
    : 'now'
    ;

/*
 * Identifier.
*/

ID
    : [a-zA-Z]+[a-zA-Z0-9_]*
    ;

/*
 * Newlines, whitespace, and comments.
*/

NEWLINE
    : [\r\n] -> channel(WHITESPACE)
    ;

WS
    : [ \t]+ -> channel(WHITESPACE)
    ;

COMMENTS
    :   ('//' ~('\n'|'\r')* (('\r'? '\n') | EOF)
    |   '/*' .*? '*/') -> channel(COMMENT)
    ;

ErrorCharacter : . ;