// Generated from src/simplex/grammar/SimplexParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { ExpActionCallContext } from './SimplexParser';
import { ExpNumberContext } from './SimplexParser';
import { ExpBinaryEqualityContext } from './SimplexParser';
import { ExpUnaryArithmeticContext } from './SimplexParser';
import { ExpBinaryArithmeticContext } from './SimplexParser';
import { ExpUnaryLogicContext } from './SimplexParser';
import { ExpBooleanContext } from './SimplexParser';
import { ExpStringContext } from './SimplexParser';
import { ExpParenthesisContext } from './SimplexParser';
import { ExpBinaryLogicContext } from './SimplexParser';
import { ExpBinaryStringConcatenateContext } from './SimplexParser';
import { ExpIntegerContext } from './SimplexParser';
import { ExpBinaryRelationalContext } from './SimplexParser';
import { ExpIDContext } from './SimplexParser';
import { AssignmentContext } from './SimplexParser';
import { AssignmentDeclarationContext } from './SimplexParser';
import { StmtIfContext } from './SimplexParser';
import { StmtAssignmentContext } from './SimplexParser';
import { StmtActionDeclarationContext } from './SimplexParser';
import { StmtActionCallContext } from './SimplexParser';
import { StmtLoopContext } from './SimplexParser';
import { SimplexContext } from './SimplexParser';
import { TypeDeclarationContext } from './SimplexParser';
import { TypeBodyContext } from './SimplexParser';
import { TypelessContext } from './SimplexParser';
import { ActionDeclarationContext } from './SimplexParser';
import { ActionParameterContext } from './SimplexParser';
import { ReturnStatementContext } from './SimplexParser';
import { BlockContext } from './SimplexParser';
import { StatementContext } from './SimplexParser';
import { ActionCallContext } from './SimplexParser';
import { ActionExpressionsContext } from './SimplexParser';
import { AssignmentStatementContext } from './SimplexParser';
import { AssignmentDeclarationTypesContext } from './SimplexParser';
import { FullQualifiedNameContext } from './SimplexParser';
import { IfStatementContext } from './SimplexParser';
import { ElseifStatementContext } from './SimplexParser';
import { ElseStatementContext } from './SimplexParser';
import { LoopStatementContext } from './SimplexParser';
import { ExpressionContext } from './SimplexParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SimplexParser`.
 */
export interface SimplexParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `expActionCall`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpActionCall?: (ctx: ExpActionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `expActionCall`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpActionCall?: (ctx: ExpActionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `expNumber`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpNumber?: (ctx: ExpNumberContext) => void;
	/**
	 * Exit a parse tree produced by the `expNumber`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpNumber?: (ctx: ExpNumberContext) => void;

	/**
	 * Enter a parse tree produced by the `expBinaryEquality`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpBinaryEquality?: (ctx: ExpBinaryEqualityContext) => void;
	/**
	 * Exit a parse tree produced by the `expBinaryEquality`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpBinaryEquality?: (ctx: ExpBinaryEqualityContext) => void;

	/**
	 * Enter a parse tree produced by the `expUnaryArithmetic`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpUnaryArithmetic?: (ctx: ExpUnaryArithmeticContext) => void;
	/**
	 * Exit a parse tree produced by the `expUnaryArithmetic`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpUnaryArithmetic?: (ctx: ExpUnaryArithmeticContext) => void;

	/**
	 * Enter a parse tree produced by the `expBinaryArithmetic`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpBinaryArithmetic?: (ctx: ExpBinaryArithmeticContext) => void;
	/**
	 * Exit a parse tree produced by the `expBinaryArithmetic`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpBinaryArithmetic?: (ctx: ExpBinaryArithmeticContext) => void;

	/**
	 * Enter a parse tree produced by the `expUnaryLogic`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpUnaryLogic?: (ctx: ExpUnaryLogicContext) => void;
	/**
	 * Exit a parse tree produced by the `expUnaryLogic`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpUnaryLogic?: (ctx: ExpUnaryLogicContext) => void;

	/**
	 * Enter a parse tree produced by the `expBoolean`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpBoolean?: (ctx: ExpBooleanContext) => void;
	/**
	 * Exit a parse tree produced by the `expBoolean`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpBoolean?: (ctx: ExpBooleanContext) => void;

	/**
	 * Enter a parse tree produced by the `expString`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpString?: (ctx: ExpStringContext) => void;
	/**
	 * Exit a parse tree produced by the `expString`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpString?: (ctx: ExpStringContext) => void;

	/**
	 * Enter a parse tree produced by the `expParenthesis`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpParenthesis?: (ctx: ExpParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by the `expParenthesis`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpParenthesis?: (ctx: ExpParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by the `expBinaryLogic`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpBinaryLogic?: (ctx: ExpBinaryLogicContext) => void;
	/**
	 * Exit a parse tree produced by the `expBinaryLogic`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpBinaryLogic?: (ctx: ExpBinaryLogicContext) => void;

	/**
	 * Enter a parse tree produced by the `expBinaryStringConcatenate`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpBinaryStringConcatenate?: (ctx: ExpBinaryStringConcatenateContext) => void;
	/**
	 * Exit a parse tree produced by the `expBinaryStringConcatenate`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpBinaryStringConcatenate?: (ctx: ExpBinaryStringConcatenateContext) => void;

	/**
	 * Enter a parse tree produced by the `expInteger`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpInteger?: (ctx: ExpIntegerContext) => void;
	/**
	 * Exit a parse tree produced by the `expInteger`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpInteger?: (ctx: ExpIntegerContext) => void;

	/**
	 * Enter a parse tree produced by the `expBinaryRelational`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpBinaryRelational?: (ctx: ExpBinaryRelationalContext) => void;
	/**
	 * Exit a parse tree produced by the `expBinaryRelational`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpBinaryRelational?: (ctx: ExpBinaryRelationalContext) => void;

	/**
	 * Enter a parse tree produced by the `expID`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpID?: (ctx: ExpIDContext) => void;
	/**
	 * Exit a parse tree produced by the `expID`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpID?: (ctx: ExpIDContext) => void;

	/**
	 * Enter a parse tree produced by the `assignment`
	 * labeled alternative in `SimplexParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `assignment`
	 * labeled alternative in `SimplexParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `assignmentDeclaration`
	 * labeled alternative in `SimplexParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentDeclaration?: (ctx: AssignmentDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `assignmentDeclaration`
	 * labeled alternative in `SimplexParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentDeclaration?: (ctx: AssignmentDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `stmtIf`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStmtIf?: (ctx: StmtIfContext) => void;
	/**
	 * Exit a parse tree produced by the `stmtIf`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStmtIf?: (ctx: StmtIfContext) => void;

	/**
	 * Enter a parse tree produced by the `stmtAssignment`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStmtAssignment?: (ctx: StmtAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `stmtAssignment`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStmtAssignment?: (ctx: StmtAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `stmtActionDeclaration`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStmtActionDeclaration?: (ctx: StmtActionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `stmtActionDeclaration`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStmtActionDeclaration?: (ctx: StmtActionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `stmtActionCall`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStmtActionCall?: (ctx: StmtActionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `stmtActionCall`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStmtActionCall?: (ctx: StmtActionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `stmtLoop`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStmtLoop?: (ctx: StmtLoopContext) => void;
	/**
	 * Exit a parse tree produced by the `stmtLoop`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStmtLoop?: (ctx: StmtLoopContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.simplex`.
	 * @param ctx the parse tree
	 */
	enterSimplex?: (ctx: SimplexContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.simplex`.
	 * @param ctx the parse tree
	 */
	exitSimplex?: (ctx: SimplexContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.typeBody`.
	 * @param ctx the parse tree
	 */
	enterTypeBody?: (ctx: TypeBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.typeBody`.
	 * @param ctx the parse tree
	 */
	exitTypeBody?: (ctx: TypeBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.typeless`.
	 * @param ctx the parse tree
	 */
	enterTypeless?: (ctx: TypelessContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.typeless`.
	 * @param ctx the parse tree
	 */
	exitTypeless?: (ctx: TypelessContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.actionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterActionDeclaration?: (ctx: ActionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.actionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitActionDeclaration?: (ctx: ActionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.actionParameter`.
	 * @param ctx the parse tree
	 */
	enterActionParameter?: (ctx: ActionParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.actionParameter`.
	 * @param ctx the parse tree
	 */
	exitActionParameter?: (ctx: ActionParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.actionCall`.
	 * @param ctx the parse tree
	 */
	enterActionCall?: (ctx: ActionCallContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.actionCall`.
	 * @param ctx the parse tree
	 */
	exitActionCall?: (ctx: ActionCallContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.actionExpressions`.
	 * @param ctx the parse tree
	 */
	enterActionExpressions?: (ctx: ActionExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.actionExpressions`.
	 * @param ctx the parse tree
	 */
	exitActionExpressions?: (ctx: ActionExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.assignmentDeclarationTypes`.
	 * @param ctx the parse tree
	 */
	enterAssignmentDeclarationTypes?: (ctx: AssignmentDeclarationTypesContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.assignmentDeclarationTypes`.
	 * @param ctx the parse tree
	 */
	exitAssignmentDeclarationTypes?: (ctx: AssignmentDeclarationTypesContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.fullQualifiedName`.
	 * @param ctx the parse tree
	 */
	enterFullQualifiedName?: (ctx: FullQualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.fullQualifiedName`.
	 * @param ctx the parse tree
	 */
	exitFullQualifiedName?: (ctx: FullQualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.elseifStatement`.
	 * @param ctx the parse tree
	 */
	enterElseifStatement?: (ctx: ElseifStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.elseifStatement`.
	 * @param ctx the parse tree
	 */
	exitElseifStatement?: (ctx: ElseifStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopStatement?: (ctx: LoopStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SimplexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}

