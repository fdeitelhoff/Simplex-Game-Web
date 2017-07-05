// Generated from src/simplex/grammar/SimplexParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SimplexParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SimplexParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `expActionCall`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpActionCall?: (ctx: ExpActionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `expNumber`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpNumber?: (ctx: ExpNumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `expBinaryEquality`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpBinaryEquality?: (ctx: ExpBinaryEqualityContext) => Result;

	/**
	 * Visit a parse tree produced by the `expUnaryArithmetic`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpUnaryArithmetic?: (ctx: ExpUnaryArithmeticContext) => Result;

	/**
	 * Visit a parse tree produced by the `expBinaryArithmetic`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpBinaryArithmetic?: (ctx: ExpBinaryArithmeticContext) => Result;

	/**
	 * Visit a parse tree produced by the `expUnaryLogic`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpUnaryLogic?: (ctx: ExpUnaryLogicContext) => Result;

	/**
	 * Visit a parse tree produced by the `expBoolean`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpBoolean?: (ctx: ExpBooleanContext) => Result;

	/**
	 * Visit a parse tree produced by the `expString`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpString?: (ctx: ExpStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `expParenthesis`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpParenthesis?: (ctx: ExpParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by the `expBinaryLogic`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpBinaryLogic?: (ctx: ExpBinaryLogicContext) => Result;

	/**
	 * Visit a parse tree produced by the `expBinaryStringConcatenate`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpBinaryStringConcatenate?: (ctx: ExpBinaryStringConcatenateContext) => Result;

	/**
	 * Visit a parse tree produced by the `expInteger`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpInteger?: (ctx: ExpIntegerContext) => Result;

	/**
	 * Visit a parse tree produced by the `expBinaryRelational`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpBinaryRelational?: (ctx: ExpBinaryRelationalContext) => Result;

	/**
	 * Visit a parse tree produced by the `expID`
	 * labeled alternative in `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpID?: (ctx: ExpIDContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignment`
	 * labeled alternative in `SimplexParser.assignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignmentDeclaration`
	 * labeled alternative in `SimplexParser.assignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentDeclaration?: (ctx: AssignmentDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `stmtIf`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmtIf?: (ctx: StmtIfContext) => Result;

	/**
	 * Visit a parse tree produced by the `stmtAssignment`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmtAssignment?: (ctx: StmtAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `stmtActionDeclaration`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmtActionDeclaration?: (ctx: StmtActionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `stmtActionCall`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmtActionCall?: (ctx: StmtActionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `stmtLoop`
	 * labeled alternative in `SimplexParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmtLoop?: (ctx: StmtLoopContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.simplex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimplex?: (ctx: SimplexContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.typeBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBody?: (ctx: TypeBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.typeless`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeless?: (ctx: TypelessContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.actionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionDeclaration?: (ctx: ActionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.actionParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionParameter?: (ctx: ActionParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.actionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionCall?: (ctx: ActionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.actionExpressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionExpressions?: (ctx: ActionExpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.assignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.assignmentDeclarationTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentDeclarationTypes?: (ctx: AssignmentDeclarationTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.fullQualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullQualifiedName?: (ctx: FullQualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.elseifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseifStatement?: (ctx: ElseifStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.elseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStatement?: (ctx: ElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStatement?: (ctx: LoopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

