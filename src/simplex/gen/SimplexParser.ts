// Generated from src/simplex/grammar/SimplexParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { SimplexParserListener } from './SimplexParserListener';

export class SimplexContext extends ParserRuleContext {
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	public typeless(): TypelessContext | undefined {
		return this.tryGetRuleContext(0, TypelessContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_simplex; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterSimplex) listener.enterSimplex(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitSimplex) listener.exitSimplex(this);
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.TYPE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.ID, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.END, 0); }
	public typeBody(): TypeBodyContext[];
	public typeBody(i: number): TypeBodyContext;
	public typeBody(i?: number): TypeBodyContext | TypeBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeBodyContext);
		} else {
			return this.getRuleContext(i, TypeBodyContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_typeDeclaration; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterTypeDeclaration) listener.enterTypeDeclaration(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitTypeDeclaration) listener.exitTypeDeclaration(this);
	}
}


export class TypeBodyContext extends ParserRuleContext {
	public assignmentStatement(): AssignmentStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignmentStatementContext);
	}
	public actionDeclaration(): ActionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ActionDeclarationContext);
	}
	public ON(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.ON, 0); }
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.CREATE, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.END, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_typeBody; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterTypeBody) listener.enterTypeBody(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitTypeBody) listener.exitTypeBody(this);
	}
}


export class TypelessContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_typeless; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterTypeless) listener.enterTypeless(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitTypeless) listener.exitTypeless(this);
	}
}


export class ActionDeclarationContext extends ParserRuleContext {
	public _name: Token;
	public _actionParameter: ActionParameterContext;
	public _params: ActionParameterContext[] = [];
	public _ret: AssignmentDeclarationTypesContext;
	public _stmts: BlockContext;
	public ACTION(): TerminalNode { return this.getToken(SimplexParser.ACTION, 0); }
	public END(): TerminalNode { return this.getToken(SimplexParser.END, 0); }
	public ID(): TerminalNode { return this.getToken(SimplexParser.ID, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public LEFT_PAREN(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.RIGHT_PAREN, 0); }
	public RETURNS(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.RETURNS, 0); }
	public assignmentDeclarationTypes(): AssignmentDeclarationTypesContext | undefined {
		return this.tryGetRuleContext(0, AssignmentDeclarationTypesContext);
	}
	public actionParameter(): ActionParameterContext[];
	public actionParameter(i: number): ActionParameterContext;
	public actionParameter(i?: number): ActionParameterContext | ActionParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActionParameterContext);
		} else {
			return this.getRuleContext(i, ActionParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimplexParser.COMMA);
		} else {
			return this.getToken(SimplexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_actionDeclaration; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterActionDeclaration) listener.enterActionDeclaration(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitActionDeclaration) listener.exitActionDeclaration(this);
	}
}


export class ActionParameterContext extends ParserRuleContext {
	public _type: AssignmentDeclarationTypesContext;
	public _name: Token;
	public assignmentDeclarationTypes(): AssignmentDeclarationTypesContext {
		return this.getRuleContext(0, AssignmentDeclarationTypesContext);
	}
	public ID(): TerminalNode { return this.getToken(SimplexParser.ID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_actionParameter; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterActionParameter) listener.enterActionParameter(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitActionParameter) listener.exitActionParameter(this);
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public _exp: ExpressionContext;
	public RETURN(): TerminalNode { return this.getToken(SimplexParser.RETURN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_returnStatement; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterReturnStatement) listener.enterReturnStatement(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitReturnStatement) listener.exitReturnStatement(this);
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_block; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterBlock) listener.enterBlock(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitBlock) listener.exitBlock(this);
	}
}


export class StatementContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_statement; }

	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class StmtIfContext extends StatementContext {
	public _stmt: IfStatementContext;
	public ifStatement(): IfStatementContext {
		return this.getRuleContext(0, IfStatementContext);
	}
	constructor(ctx: StatementContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterStmtIf) listener.enterStmtIf(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitStmtIf) listener.exitStmtIf(this);
	}
}
export class StmtAssignmentContext extends StatementContext {
	public _stmt: AssignmentStatementContext;
	public assignmentStatement(): AssignmentStatementContext {
		return this.getRuleContext(0, AssignmentStatementContext);
	}
	constructor(ctx: StatementContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterStmtAssignment) listener.enterStmtAssignment(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitStmtAssignment) listener.exitStmtAssignment(this);
	}
}
export class StmtActionDeclarationContext extends StatementContext {
	public _stmt: ActionDeclarationContext;
	public actionDeclaration(): ActionDeclarationContext {
		return this.getRuleContext(0, ActionDeclarationContext);
	}
	constructor(ctx: StatementContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterStmtActionDeclaration) listener.enterStmtActionDeclaration(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitStmtActionDeclaration) listener.exitStmtActionDeclaration(this);
	}
}
export class StmtActionCallContext extends StatementContext {
	public _stmt: ActionCallContext;
	public actionCall(): ActionCallContext {
		return this.getRuleContext(0, ActionCallContext);
	}
	constructor(ctx: StatementContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterStmtActionCall) listener.enterStmtActionCall(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitStmtActionCall) listener.exitStmtActionCall(this);
	}
}
export class StmtLoopContext extends StatementContext {
	public _stmt: LoopStatementContext;
	public loopStatement(): LoopStatementContext {
		return this.getRuleContext(0, LoopStatementContext);
	}
	constructor(ctx: StatementContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterStmtLoop) listener.enterStmtLoop(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitStmtLoop) listener.exitStmtLoop(this);
	}
}


export class ActionCallContext extends ParserRuleContext {
	public _type: FullQualifiedNameContext;
	public _me: Token;
	public _name: Token;
	public _exp: ActionExpressionsContext;
	public LEFT_PAREN(): TerminalNode { return this.getToken(SimplexParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode { return this.getToken(SimplexParser.RIGHT_PAREN, 0); }
	public ID(): TerminalNode { return this.getToken(SimplexParser.ID, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.COLON, 0); }
	public actionExpressions(): ActionExpressionsContext | undefined {
		return this.tryGetRuleContext(0, ActionExpressionsContext);
	}
	public fullQualifiedName(): FullQualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, FullQualifiedNameContext);
	}
	public ME(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.ME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_actionCall; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterActionCall) listener.enterActionCall(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitActionCall) listener.exitActionCall(this);
	}
}


export class ActionExpressionsContext extends ParserRuleContext {
	public _expression: ExpressionContext;
	public _exp: ExpressionContext[] = [];
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimplexParser.COMMA);
		} else {
			return this.getToken(SimplexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_actionExpressions; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterActionExpressions) listener.enterActionExpressions(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitActionExpressions) listener.exitActionExpressions(this);
	}
}


export class AssignmentStatementContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_assignmentStatement; }

	public copyFrom(ctx: AssignmentStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class AssignmentContext extends AssignmentStatementContext {
	public _name: Token;
	public _exp: ExpressionContext;
	public EQUALITY(): TerminalNode { return this.getToken(SimplexParser.EQUALITY, 0); }
	public ID(): TerminalNode { return this.getToken(SimplexParser.ID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ME(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.ME, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.COLON, 0); }
	constructor(ctx: AssignmentStatementContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterAssignment) listener.enterAssignment(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitAssignment) listener.exitAssignment(this);
	}
}
export class AssignmentDeclarationContext extends AssignmentStatementContext {
	public _type: AssignmentDeclarationTypesContext;
	public _name: Token;
	public _exp: ExpressionContext;
	public EQUALITY(): TerminalNode { return this.getToken(SimplexParser.EQUALITY, 0); }
	public assignmentDeclarationTypes(): AssignmentDeclarationTypesContext {
		return this.getRuleContext(0, AssignmentDeclarationTypesContext);
	}
	public ID(): TerminalNode { return this.getToken(SimplexParser.ID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: AssignmentStatementContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterAssignmentDeclaration) listener.enterAssignmentDeclaration(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitAssignmentDeclaration) listener.exitAssignmentDeclaration(this);
	}
}


export class AssignmentDeclarationTypesContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.ID, 0); }
	public BOOLEAN_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.BOOLEAN_KEYWORD, 0); }
	public INTEGER_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.INTEGER_KEYWORD, 0); }
	public NUMBER_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.NUMBER_KEYWORD, 0); }
	public TEXT_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.TEXT_KEYWORD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_assignmentDeclarationTypes; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterAssignmentDeclarationTypes) listener.enterAssignmentDeclarationTypes(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitAssignmentDeclarationTypes) listener.exitAssignmentDeclarationTypes(this);
	}
}


export class FullQualifiedNameContext extends ParserRuleContext {
	public _ID: Token;
	public _ids: Token[] = [];
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimplexParser.ID);
		} else {
			return this.getToken(SimplexParser.ID, i);
		}
	}
	public PERIOD(): TerminalNode[];
	public PERIOD(i: number): TerminalNode;
	public PERIOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimplexParser.PERIOD);
		} else {
			return this.getToken(SimplexParser.PERIOD, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_fullQualifiedName; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterFullQualifiedName) listener.enterFullQualifiedName(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitFullQualifiedName) listener.exitFullQualifiedName(this);
	}
}


export class IfStatementContext extends ParserRuleContext {
	public _exp: ExpressionContext;
	public _stmts: BlockContext;
	public IF(): TerminalNode { return this.getToken(SimplexParser.IF, 0); }
	public END(): TerminalNode { return this.getToken(SimplexParser.END, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public elseifStatement(): ElseifStatementContext[];
	public elseifStatement(i: number): ElseifStatementContext;
	public elseifStatement(i?: number): ElseifStatementContext | ElseifStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseifStatementContext);
		} else {
			return this.getRuleContext(i, ElseifStatementContext);
		}
	}
	public elseStatement(): ElseStatementContext | undefined {
		return this.tryGetRuleContext(0, ElseStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_ifStatement; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterIfStatement) listener.enterIfStatement(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitIfStatement) listener.exitIfStatement(this);
	}
}


export class ElseifStatementContext extends ParserRuleContext {
	public _exp: ExpressionContext;
	public _stmts: BlockContext;
	public ELSEIF(): TerminalNode { return this.getToken(SimplexParser.ELSEIF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_elseifStatement; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterElseifStatement) listener.enterElseifStatement(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitElseifStatement) listener.exitElseifStatement(this);
	}
}


export class ElseStatementContext extends ParserRuleContext {
	public _stmts: BlockContext;
	public ELSE(): TerminalNode { return this.getToken(SimplexParser.ELSE, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_elseStatement; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterElseStatement) listener.enterElseStatement(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitElseStatement) listener.exitElseStatement(this);
	}
}


export class LoopStatementContext extends ParserRuleContext {
	public _exp: ExpressionContext;
	public _type: Token;
	public _stmts: BlockContext;
	public REPEAT(): TerminalNode { return this.getToken(SimplexParser.REPEAT, 0); }
	public END(): TerminalNode { return this.getToken(SimplexParser.END, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public TIMES(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.TIMES, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.WHILE, 0); }
	public UNTIL(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.UNTIL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_loopStatement; }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterLoopStatement) listener.enterLoopStatement(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitLoopStatement) listener.exitLoopStatement(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SimplexParser.RULE_expression; }

	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpActionCallContext extends ExpressionContext {
	public _call: ActionCallContext;
	public actionCall(): ActionCallContext {
		return this.getRuleContext(0, ActionCallContext);
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpActionCall) listener.enterExpActionCall(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpActionCall) listener.exitExpActionCall(this);
	}
}
export class ExpNumberContext extends ExpressionContext {
	public _value: Token;
	public NUMBER(): TerminalNode { return this.getToken(SimplexParser.NUMBER, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpNumber) listener.enterExpNumber(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpNumber) listener.exitExpNumber(this);
	}
}
export class ExpBinaryEqualityContext extends ExpressionContext {
	public _expLeft: ExpressionContext;
	public _symbol: Token;
	public _expRight: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQUALITY(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.EQUALITY, 0); }
	public NOTEQUALS(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.NOTEQUALS, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpBinaryEquality) listener.enterExpBinaryEquality(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpBinaryEquality) listener.exitExpBinaryEquality(this);
	}
}
export class ExpUnaryArithmeticContext extends ExpressionContext {
	public _symbol: Token;
	public _expRight: ExpressionContext;
	public MINUS(): TerminalNode { return this.getToken(SimplexParser.MINUS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpUnaryArithmetic) listener.enterExpUnaryArithmetic(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpUnaryArithmetic) listener.exitExpUnaryArithmetic(this);
	}
}
export class ExpBinaryArithmeticContext extends ExpressionContext {
	public _expLeft: ExpressionContext;
	public _symbol: Token;
	public _expRight: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MULTIPLY(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.MULTIPLY, 0); }
	public DIVIDE(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.DIVIDE, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.MODULO, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.MINUS, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpBinaryArithmetic) listener.enterExpBinaryArithmetic(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpBinaryArithmetic) listener.exitExpBinaryArithmetic(this);
	}
}
export class ExpUnaryLogicContext extends ExpressionContext {
	public _symbol: Token;
	public _expRight: ExpressionContext;
	public NOT(): TerminalNode { return this.getToken(SimplexParser.NOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpUnaryLogic) listener.enterExpUnaryLogic(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpUnaryLogic) listener.exitExpUnaryLogic(this);
	}
}
export class ExpBooleanContext extends ExpressionContext {
	public _value: Token;
	public BOOLEAN(): TerminalNode { return this.getToken(SimplexParser.BOOLEAN, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpBoolean) listener.enterExpBoolean(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpBoolean) listener.exitExpBoolean(this);
	}
}
export class ExpStringContext extends ExpressionContext {
	public _value: Token;
	public TEXT(): TerminalNode { return this.getToken(SimplexParser.TEXT, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpString) listener.enterExpString(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpString) listener.exitExpString(this);
	}
}
export class ExpParenthesisContext extends ExpressionContext {
	public _expCenter: ExpressionContext;
	public LEFT_PAREN(): TerminalNode { return this.getToken(SimplexParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode { return this.getToken(SimplexParser.RIGHT_PAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpParenthesis) listener.enterExpParenthesis(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpParenthesis) listener.exitExpParenthesis(this);
	}
}
export class ExpBinaryLogicContext extends ExpressionContext {
	public _expLeft: ExpressionContext;
	public _symbol: Token;
	public _expRight: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.OR, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpBinaryLogic) listener.enterExpBinaryLogic(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpBinaryLogic) listener.exitExpBinaryLogic(this);
	}
}
export class ExpBinaryStringConcatenateContext extends ExpressionContext {
	public _expLeft: ExpressionContext;
	public _symbol: Token;
	public _expRight: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CONCATENATE(): TerminalNode { return this.getToken(SimplexParser.CONCATENATE, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpBinaryStringConcatenate) listener.enterExpBinaryStringConcatenate(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpBinaryStringConcatenate) listener.exitExpBinaryStringConcatenate(this);
	}
}
export class ExpIntegerContext extends ExpressionContext {
	public _value: Token;
	public INTEGER(): TerminalNode { return this.getToken(SimplexParser.INTEGER, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpInteger) listener.enterExpInteger(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpInteger) listener.exitExpInteger(this);
	}
}
export class ExpBinaryRelationalContext extends ExpressionContext {
	public _expLeft: ExpressionContext;
	public _symbol: Token;
	public _expRight: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.GREATER, 0); }
	public GREATER_EQUAL(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.GREATER_EQUAL, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.LESS, 0); }
	public LESS_EQUAL(): TerminalNode | undefined { return this.tryGetToken(SimplexParser.LESS_EQUAL, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpBinaryRelational) listener.enterExpBinaryRelational(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpBinaryRelational) listener.exitExpBinaryRelational(this);
	}
}
export class ExpIDContext extends ExpressionContext {
	public _name: Token;
	public ID(): TerminalNode { return this.getToken(SimplexParser.ID, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SimplexParserListener): void {
		if (listener.enterExpID) listener.enterExpID(this);
	}
	@Override
	public exitRule(listener: SimplexParserListener): void {
		if (listener.exitExpID) listener.exitExpID(this);
	}
}

export class SimplexParser extends Parser {
	public static readonly BOOLEAN_KEYWORD=1;
	public static readonly INTEGER_KEYWORD=2;
	public static readonly NUMBER_KEYWORD=3;
	public static readonly TEXT_KEYWORD=4;
	public static readonly BOOLEAN=5;
	public static readonly INTEGER=6;
	public static readonly NUMBER=7;
	public static readonly TEXT=8;
	public static readonly TYPE=9;
	public static readonly ON=10;
	public static readonly CREATE=11;
	public static readonly IF=12;
	public static readonly END=13;
	public static readonly ELSEIF=14;
	public static readonly ELSE=15;
	public static readonly WHILE=16;
	public static readonly TIMES=17;
	public static readonly REPEAT=18;
	public static readonly UNTIL=19;
	public static readonly EQUALITY=20;
	public static readonly GREATER=21;
	public static readonly GREATER_EQUAL=22;
	public static readonly LESS=23;
	public static readonly LESS_EQUAL=24;
	public static readonly PLUS=25;
	public static readonly CONCATENATE=26;
	public static readonly MINUS=27;
	public static readonly MULTIPLY=28;
	public static readonly DIVIDE=29;
	public static readonly MODULO=30;
	public static readonly NOT=31;
	public static readonly NOTEQUALS=32;
	public static readonly AND=33;
	public static readonly OR=34;
	public static readonly ME=35;
	public static readonly PERIOD=36;
	public static readonly ACTION=37;
	public static readonly COLON=38;
	public static readonly LEFT_PAREN=39;
	public static readonly RIGHT_PAREN=40;
	public static readonly COMMA=41;
	public static readonly RETURNS=42;
	public static readonly RETURN=43;
	public static readonly NOW=44;
	public static readonly ID=45;
	public static readonly NEWLINE=46;
	public static readonly WS=47;
	public static readonly COMMENTS=48;
	public static readonly ErrorCharacter=49;
	public static readonly RULE_simplex = 0;
	public static readonly RULE_typeDeclaration = 1;
	public static readonly RULE_typeBody = 2;
	public static readonly RULE_typeless = 3;
	public static readonly RULE_actionDeclaration = 4;
	public static readonly RULE_actionParameter = 5;
	public static readonly RULE_returnStatement = 6;
	public static readonly RULE_block = 7;
	public static readonly RULE_statement = 8;
	public static readonly RULE_actionCall = 9;
	public static readonly RULE_actionExpressions = 10;
	public static readonly RULE_assignmentStatement = 11;
	public static readonly RULE_assignmentDeclarationTypes = 12;
	public static readonly RULE_fullQualifiedName = 13;
	public static readonly RULE_ifStatement = 14;
	public static readonly RULE_elseifStatement = 15;
	public static readonly RULE_elseStatement = 16;
	public static readonly RULE_loopStatement = 17;
	public static readonly RULE_expression = 18;
	public static readonly ruleNames: string[] = [
		"simplex", "typeDeclaration", "typeBody", "typeless", "actionDeclaration",
		"actionParameter", "returnStatement", "block", "statement", "actionCall",
		"actionExpressions", "assignmentStatement", "assignmentDeclarationTypes",
		"fullQualifiedName", "ifStatement", "elseifStatement", "elseStatement",
		"loopStatement", "expression"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'boolean'", "'integer'", "'number'", "'text'", undefined,
		undefined, undefined, undefined, "'type'", "'on'", "'create'", "'if'",
		"'end'", "'elseif'", "'else'", "'while'", "'times'", "'repeat'", "'until'",
		"'='", "'>'", "'>='", "'<'", "'<='", "'+'", "'++'", "'-'", "'*'", "'/'",
		"'mod'", "'not'", "'not='", "'and'", "'or'", "'me'", "'.'", "'action'",
		"':'", "'('", "')'", "','", "'returns'", "'return'", "'now'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "BOOLEAN_KEYWORD", "INTEGER_KEYWORD", "NUMBER_KEYWORD", "TEXT_KEYWORD",
		"BOOLEAN", "INTEGER", "NUMBER", "TEXT", "TYPE", "ON", "CREATE", "IF",
		"END", "ELSEIF", "ELSE", "WHILE", "TIMES", "REPEAT", "UNTIL", "EQUALITY",
		"GREATER", "GREATER_EQUAL", "LESS", "LESS_EQUAL", "PLUS", "CONCATENATE",
		"MINUS", "MULTIPLY", "DIVIDE", "MODULO", "NOT", "NOTEQUALS", "AND", "OR",
		"ME", "PERIOD", "ACTION", "COLON", "LEFT_PAREN", "RIGHT_PAREN", "COMMA",
		"RETURNS", "RETURN", "NOW", "ID", "NEWLINE", "WS", "COMMENTS", "ErrorCharacter"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimplexParser._LITERAL_NAMES, SimplexParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return SimplexParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "SimplexParser.g4"; }

	@Override
	public get ruleNames(): string[] { return SimplexParser.ruleNames; }

	@Override
	public get serializedATN(): string { return SimplexParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SimplexParser._ATN, this);
	}
	@RuleVersion(0)
	public simplex(): SimplexContext {
		let _localctx: SimplexContext = new SimplexContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SimplexParser.RULE_simplex);
		try {
			this.state = 40;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimplexParser.TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 38;
				this.typeDeclaration();
				}
				break;
			case SimplexParser.BOOLEAN_KEYWORD:
			case SimplexParser.INTEGER_KEYWORD:
			case SimplexParser.NUMBER_KEYWORD:
			case SimplexParser.TEXT_KEYWORD:
			case SimplexParser.IF:
			case SimplexParser.REPEAT:
			case SimplexParser.ME:
			case SimplexParser.ACTION:
			case SimplexParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 39;
				this.typeless();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SimplexParser.RULE_typeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 42;
			this.match(SimplexParser.TYPE);
			this.state = 43;
			this.match(SimplexParser.ID);
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimplexParser.BOOLEAN_KEYWORD) | (1 << SimplexParser.INTEGER_KEYWORD) | (1 << SimplexParser.NUMBER_KEYWORD) | (1 << SimplexParser.TEXT_KEYWORD) | (1 << SimplexParser.ON))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SimplexParser.ME - 35)) | (1 << (SimplexParser.ACTION - 35)) | (1 << (SimplexParser.ID - 35)))) !== 0)) {
				{
				{
				this.state = 44;
				this.typeBody();
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 50;
			this.match(SimplexParser.END);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeBody(): TypeBodyContext {
		let _localctx: TypeBodyContext = new TypeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SimplexParser.RULE_typeBody);
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimplexParser.BOOLEAN_KEYWORD:
			case SimplexParser.INTEGER_KEYWORD:
			case SimplexParser.NUMBER_KEYWORD:
			case SimplexParser.TEXT_KEYWORD:
			case SimplexParser.ME:
			case SimplexParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.assignmentStatement();
				}
				break;
			case SimplexParser.ACTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 53;
				this.actionDeclaration();
				}
				break;
			case SimplexParser.ON:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 54;
				this.match(SimplexParser.ON);
				this.state = 55;
				this.match(SimplexParser.CREATE);
				this.state = 56;
				this.block();
				this.state = 57;
				this.match(SimplexParser.END);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeless(): TypelessContext {
		let _localctx: TypelessContext = new TypelessContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SimplexParser.RULE_typeless);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 61;
				this.statement();
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimplexParser.BOOLEAN_KEYWORD) | (1 << SimplexParser.INTEGER_KEYWORD) | (1 << SimplexParser.NUMBER_KEYWORD) | (1 << SimplexParser.TEXT_KEYWORD) | (1 << SimplexParser.IF) | (1 << SimplexParser.REPEAT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SimplexParser.ME - 35)) | (1 << (SimplexParser.ACTION - 35)) | (1 << (SimplexParser.ID - 35)))) !== 0) );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public actionDeclaration(): ActionDeclarationContext {
		let _localctx: ActionDeclarationContext = new ActionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SimplexParser.RULE_actionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(SimplexParser.ACTION);
			this.state = 67;
			_localctx._name = this.match(SimplexParser.ID);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SimplexParser.LEFT_PAREN) {
				{
				this.state = 68;
				this.match(SimplexParser.LEFT_PAREN);
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimplexParser.BOOLEAN_KEYWORD) | (1 << SimplexParser.INTEGER_KEYWORD) | (1 << SimplexParser.NUMBER_KEYWORD) | (1 << SimplexParser.TEXT_KEYWORD))) !== 0) || _la===SimplexParser.ID) {
					{
					this.state = 69;
					_localctx._actionParameter = this.actionParameter();
					_localctx._params.push(_localctx._actionParameter);
					this.state = 74;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===SimplexParser.COMMA) {
						{
						{
						this.state = 70;
						this.match(SimplexParser.COMMA);
						this.state = 71;
						_localctx._actionParameter = this.actionParameter();
						_localctx._params.push(_localctx._actionParameter);
						}
						}
						this.state = 76;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 79;
				this.match(SimplexParser.RIGHT_PAREN);
				}
			}

			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SimplexParser.RETURNS) {
				{
				this.state = 82;
				this.match(SimplexParser.RETURNS);
				this.state = 83;
				_localctx._ret = this.assignmentDeclarationTypes();
				}
			}

			this.state = 86;
			_localctx._stmts = this.block();
			this.state = 87;
			this.match(SimplexParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public actionParameter(): ActionParameterContext {
		let _localctx: ActionParameterContext = new ActionParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SimplexParser.RULE_actionParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			_localctx._type = this.assignmentDeclarationTypes();
			this.state = 90;
			_localctx._name = this.match(SimplexParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SimplexParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(SimplexParser.RETURN);
			this.state = 93;
			_localctx._exp = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SimplexParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimplexParser.BOOLEAN_KEYWORD) | (1 << SimplexParser.INTEGER_KEYWORD) | (1 << SimplexParser.NUMBER_KEYWORD) | (1 << SimplexParser.TEXT_KEYWORD) | (1 << SimplexParser.IF) | (1 << SimplexParser.REPEAT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SimplexParser.ME - 35)) | (1 << (SimplexParser.ACTION - 35)) | (1 << (SimplexParser.ID - 35)))) !== 0)) {
				{
				{
				this.state = 95;
				this.statement();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SimplexParser.RETURN) {
				{
				this.state = 101;
				this.returnStatement();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SimplexParser.RULE_statement);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,10,this._ctx) ) {
			case 1:
				_localctx = new StmtIfContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 104;
				(_localctx as StmtIfContext)._stmt = this.ifStatement();
				}
				break;

			case 2:
				_localctx = new StmtLoopContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 105;
				(_localctx as StmtLoopContext)._stmt = this.loopStatement();
				}
				break;

			case 3:
				_localctx = new StmtAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 106;
				(_localctx as StmtAssignmentContext)._stmt = this.assignmentStatement();
				}
				break;

			case 4:
				_localctx = new StmtActionDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 107;
				(_localctx as StmtActionDeclarationContext)._stmt = this.actionDeclaration();
				}
				break;

			case 5:
				_localctx = new StmtActionCallContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 108;
				(_localctx as StmtActionCallContext)._stmt = this.actionCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public actionCall(): ActionCallContext {
		let _localctx: ActionCallContext = new ActionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SimplexParser.RULE_actionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,12,this._ctx) ) {
			case 1:
				{
				this.state = 113;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SimplexParser.ID:
					{
					this.state = 111;
					_localctx._type = this.fullQualifiedName();
					}
					break;
				case SimplexParser.ME:
					{
					this.state = 112;
					_localctx._me = this.match(SimplexParser.ME);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 115;
				this.match(SimplexParser.COLON);
				}
				break;
			}
			this.state = 118;
			_localctx._name = this.match(SimplexParser.ID);
			this.state = 119;
			this.match(SimplexParser.LEFT_PAREN);
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimplexParser.BOOLEAN) | (1 << SimplexParser.INTEGER) | (1 << SimplexParser.NUMBER) | (1 << SimplexParser.TEXT) | (1 << SimplexParser.MINUS) | (1 << SimplexParser.NOT))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SimplexParser.ME - 35)) | (1 << (SimplexParser.LEFT_PAREN - 35)) | (1 << (SimplexParser.ID - 35)))) !== 0)) {
				{
				this.state = 120;
				_localctx._exp = this.actionExpressions();
				}
			}

			this.state = 123;
			this.match(SimplexParser.RIGHT_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public actionExpressions(): ActionExpressionsContext {
		let _localctx: ActionExpressionsContext = new ActionExpressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SimplexParser.RULE_actionExpressions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			_localctx._expression = this.expression(0);
			_localctx._exp.push(_localctx._expression);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SimplexParser.COMMA) {
				{
				{
				this.state = 126;
				this.match(SimplexParser.COMMA);
				this.state = 127;
				_localctx._expression = this.expression(0);
				_localctx._exp.push(_localctx._expression);
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentStatement(): AssignmentStatementContext {
		let _localctx: AssignmentStatementContext = new AssignmentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SimplexParser.RULE_assignmentStatement);
		let _la: number;
		try {
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,16,this._ctx) ) {
			case 1:
				_localctx = new AssignmentDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 133;
				(_localctx as AssignmentDeclarationContext)._type = this.assignmentDeclarationTypes();
				this.state = 134;
				(_localctx as AssignmentDeclarationContext)._name = this.match(SimplexParser.ID);
				this.state = 135;
				this.match(SimplexParser.EQUALITY);
				this.state = 136;
				(_localctx as AssignmentDeclarationContext)._exp = this.expression(0);
				}
				break;

			case 2:
				_localctx = new AssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SimplexParser.ME) {
					{
					this.state = 138;
					this.match(SimplexParser.ME);
					this.state = 139;
					this.match(SimplexParser.COLON);
					}
				}

				this.state = 142;
				(_localctx as AssignmentContext)._name = this.match(SimplexParser.ID);
				this.state = 143;
				this.match(SimplexParser.EQUALITY);
				this.state = 144;
				(_localctx as AssignmentContext)._exp = this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentDeclarationTypes(): AssignmentDeclarationTypesContext {
		let _localctx: AssignmentDeclarationTypesContext = new AssignmentDeclarationTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SimplexParser.RULE_assignmentDeclarationTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimplexParser.BOOLEAN_KEYWORD) | (1 << SimplexParser.INTEGER_KEYWORD) | (1 << SimplexParser.NUMBER_KEYWORD) | (1 << SimplexParser.TEXT_KEYWORD))) !== 0) || _la===SimplexParser.ID) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public fullQualifiedName(): FullQualifiedNameContext {
		let _localctx: FullQualifiedNameContext = new FullQualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SimplexParser.RULE_fullQualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			_localctx._ID = this.match(SimplexParser.ID);
			_localctx._ids.push(_localctx._ID);
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SimplexParser.PERIOD) {
				{
				{
				this.state = 150;
				this.match(SimplexParser.PERIOD);
				this.state = 151;
				_localctx._ID = this.match(SimplexParser.ID);
				_localctx._ids.push(_localctx._ID);
				}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SimplexParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(SimplexParser.IF);
			this.state = 158;
			_localctx._exp = this.expression(0);
			this.state = 159;
			_localctx._stmts = this.block();
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SimplexParser.ELSEIF) {
				{
				{
				this.state = 160;
				this.elseifStatement();
				}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SimplexParser.ELSE) {
				{
				this.state = 166;
				this.elseStatement();
				}
			}

			this.state = 169;
			this.match(SimplexParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseifStatement(): ElseifStatementContext {
		let _localctx: ElseifStatementContext = new ElseifStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SimplexParser.RULE_elseifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(SimplexParser.ELSEIF);
			this.state = 172;
			_localctx._exp = this.expression(0);
			this.state = 173;
			_localctx._stmts = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseStatement(): ElseStatementContext {
		let _localctx: ElseStatementContext = new ElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SimplexParser.RULE_elseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.match(SimplexParser.ELSE);
			this.state = 176;
			_localctx._stmts = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public loopStatement(): LoopStatementContext {
		let _localctx: LoopStatementContext = new LoopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SimplexParser.RULE_loopStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(SimplexParser.REPEAT);
			this.state = 184;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimplexParser.BOOLEAN:
			case SimplexParser.INTEGER:
			case SimplexParser.NUMBER:
			case SimplexParser.TEXT:
			case SimplexParser.MINUS:
			case SimplexParser.NOT:
			case SimplexParser.ME:
			case SimplexParser.LEFT_PAREN:
			case SimplexParser.ID:
				{
				{
				this.state = 179;
				_localctx._exp = this.expression(0);
				this.state = 180;
				_localctx._type = this.match(SimplexParser.TIMES);
				}
				}
				break;
			case SimplexParser.WHILE:
			case SimplexParser.UNTIL:
				{
				{
				this.state = 182;
				_localctx._type = this._input.LT(1);
				_la = this._input.LA(1);
				if ( !(_la===SimplexParser.WHILE || _la===SimplexParser.UNTIL) ) {
					_localctx._type = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 183;
				_localctx._exp = this.expression(0);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 186;
			_localctx._stmts = this.block();
			this.state = 187;
			this.match(SimplexParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	@RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, SimplexParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,21,this._ctx) ) {
			case 1:
				{
				_localctx = new ExpBooleanContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 190;
				(_localctx as ExpBooleanContext)._value = this.match(SimplexParser.BOOLEAN);
				}
				break;

			case 2:
				{
				_localctx = new ExpIntegerContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 191;
				(_localctx as ExpIntegerContext)._value = this.match(SimplexParser.INTEGER);
				}
				break;

			case 3:
				{
				_localctx = new ExpNumberContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 192;
				(_localctx as ExpNumberContext)._value = this.match(SimplexParser.NUMBER);
				}
				break;

			case 4:
				{
				_localctx = new ExpStringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 193;
				(_localctx as ExpStringContext)._value = this.match(SimplexParser.TEXT);
				}
				break;

			case 5:
				{
				_localctx = new ExpIDContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 194;
				(_localctx as ExpIDContext)._name = this.match(SimplexParser.ID);
				}
				break;

			case 6:
				{
				_localctx = new ExpUnaryArithmeticContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 195;
				(_localctx as ExpUnaryArithmeticContext)._symbol = this.match(SimplexParser.MINUS);
				this.state = 196;
				(_localctx as ExpUnaryArithmeticContext)._expRight = this.expression(11);
				}
				break;

			case 7:
				{
				_localctx = new ExpUnaryLogicContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 197;
				(_localctx as ExpUnaryLogicContext)._symbol = this.match(SimplexParser.NOT);
				this.state = 198;
				(_localctx as ExpUnaryLogicContext)._expRight = this.expression(10);
				}
				break;

			case 8:
				{
				_localctx = new ExpActionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 199;
				(_localctx as ExpActionCallContext)._call = this.actionCall();
				}
				break;

			case 9:
				{
				_localctx = new ExpParenthesisContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 200;
				this.match(SimplexParser.LEFT_PAREN);
				this.state = 201;
				(_localctx as ExpParenthesisContext)._expCenter = this.expression(0);
				this.state = 202;
				this.match(SimplexParser.RIGHT_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 229;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,23,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 227;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,22,this._ctx) ) {
					case 1:
						{
						_localctx = new ExpBinaryArithmeticContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpBinaryArithmeticContext)._expLeft = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SimplexParser.RULE_expression);
						this.state = 206;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 207;
						(_localctx as ExpBinaryArithmeticContext)._symbol = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimplexParser.MULTIPLY) | (1 << SimplexParser.DIVIDE) | (1 << SimplexParser.MODULO))) !== 0)) ) {
							(_localctx as ExpBinaryArithmeticContext)._symbol = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 208;
						(_localctx as ExpBinaryArithmeticContext)._expRight = this.expression(8);
						}
						break;

					case 2:
						{
						_localctx = new ExpBinaryStringConcatenateContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpBinaryStringConcatenateContext)._expLeft = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SimplexParser.RULE_expression);
						this.state = 209;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 210;
						(_localctx as ExpBinaryStringConcatenateContext)._symbol = this.match(SimplexParser.CONCATENATE);
						this.state = 211;
						(_localctx as ExpBinaryStringConcatenateContext)._expRight = this.expression(7);
						}
						break;

					case 3:
						{
						_localctx = new ExpBinaryArithmeticContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpBinaryArithmeticContext)._expLeft = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SimplexParser.RULE_expression);
						this.state = 212;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 213;
						(_localctx as ExpBinaryArithmeticContext)._symbol = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===SimplexParser.PLUS || _la===SimplexParser.MINUS) ) {
							(_localctx as ExpBinaryArithmeticContext)._symbol = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 214;
						(_localctx as ExpBinaryArithmeticContext)._expRight = this.expression(6);
						}
						break;

					case 4:
						{
						_localctx = new ExpBinaryRelationalContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpBinaryRelationalContext)._expLeft = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SimplexParser.RULE_expression);
						this.state = 215;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 216;
						(_localctx as ExpBinaryRelationalContext)._symbol = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimplexParser.GREATER) | (1 << SimplexParser.GREATER_EQUAL) | (1 << SimplexParser.LESS) | (1 << SimplexParser.LESS_EQUAL))) !== 0)) ) {
							(_localctx as ExpBinaryRelationalContext)._symbol = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 217;
						(_localctx as ExpBinaryRelationalContext)._expRight = this.expression(5);
						}
						break;

					case 5:
						{
						_localctx = new ExpBinaryEqualityContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpBinaryEqualityContext)._expLeft = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SimplexParser.RULE_expression);
						this.state = 218;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 219;
						(_localctx as ExpBinaryEqualityContext)._symbol = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===SimplexParser.EQUALITY || _la===SimplexParser.NOTEQUALS) ) {
							(_localctx as ExpBinaryEqualityContext)._symbol = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 220;
						(_localctx as ExpBinaryEqualityContext)._expRight = this.expression(4);
						}
						break;

					case 6:
						{
						_localctx = new ExpBinaryLogicContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpBinaryLogicContext)._expLeft = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SimplexParser.RULE_expression);
						this.state = 221;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 222;
						(_localctx as ExpBinaryLogicContext)._symbol = this.match(SimplexParser.AND);
						this.state = 223;
						(_localctx as ExpBinaryLogicContext)._expRight = this.expression(3);
						}
						break;

					case 7:
						{
						_localctx = new ExpBinaryLogicContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpBinaryLogicContext)._expLeft = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SimplexParser.RULE_expression);
						this.state = 224;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 225;
						(_localctx as ExpBinaryLogicContext)._symbol = this.match(SimplexParser.OR);
						this.state = 226;
						(_localctx as ExpBinaryLogicContext)._expRight = this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,23,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 18:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);

		case 1:
			return this.precpred(this._ctx, 6);

		case 2:
			return this.precpred(this._ctx, 5);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 3);

		case 5:
			return this.precpred(this._ctx, 2);

		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x033\xEB\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x05\x02+\n\x02\x03\x03\x03\x03"+
		"\x03\x03\x07\x030\n\x03\f\x03\x0E\x033\v\x03\x03\x03\x03\x03\x03\x04\x03"+
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04>\n\x04\x03\x05\x06"+
		"\x05A\n\x05\r\x05\x0E\x05B\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x07\x06K\n\x06\f\x06\x0E\x06N\v\x06\x05\x06P\n\x06\x03\x06\x05\x06"+
		"S\n\x06\x03\x06\x03\x06\x05\x06W\n\x06\x03\x06\x03\x06\x03\x06\x03\x07"+
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x07\tc\n\t\f\t\x0E\tf\v\t\x03"+
		"\t\x05\ti\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\np\n\n\x03\v\x03\v\x05"+
		"\vt\n\v\x03\v\x05\vw\n\v\x03\v\x03\v\x03\v\x05\v|\n\v\x03\v\x03\v\x03"+
		"\f\x03\f\x03\f\x07\f\x83\n\f\f\f\x0E\f\x86\v\f\x03\r\x03\r\x03\r\x03\r"+
		"\x03\r\x03\r\x03\r\x05\r\x8F\n\r\x03\r\x03\r\x03\r\x05\r\x94\n\r\x03\x0E"+
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\x9B\n\x0F\f\x0F\x0E\x0F\x9E\v"+
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xA4\n\x10\f\x10\x0E\x10\xA7"+
		"\v\x10\x03\x10\x05\x10\xAA\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11"+
		"\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13"+
		"\x03\x13\x05\x13\xBB\n\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03"+
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03"+
		"\x14\x03\x14\x03\x14\x03\x14\x05\x14\xCF\n\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x07\x14\xE6\n\x14\f\x14\x0E\x14\xE9\v\x14\x03\x14\x02\x02\x03&\x15\x02"+
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02"+
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02\b\x04"+
		"\x02\x03\x06//\x04\x02\x12\x12\x15\x15\x03\x02\x1E \x04\x02\x1B\x1B\x1D"+
		"\x1D\x03\x02\x17\x1A\x04\x02\x16\x16\"\"\xFF\x02*\x03\x02\x02\x02\x04"+
		",\x03\x02\x02\x02\x06=\x03\x02\x02\x02\b@\x03\x02\x02\x02\nD\x03\x02\x02"+
		"\x02\f[\x03\x02\x02\x02\x0E^\x03\x02\x02\x02\x10d\x03\x02\x02\x02\x12"+
		"o\x03\x02\x02\x02\x14v\x03\x02\x02\x02\x16\x7F\x03\x02\x02\x02\x18\x93"+
		"\x03\x02\x02\x02\x1A\x95\x03\x02\x02\x02\x1C\x97\x03\x02\x02\x02\x1E\x9F"+
		"\x03\x02\x02\x02 \xAD\x03\x02\x02\x02\"\xB1\x03\x02\x02\x02$\xB4\x03\x02"+
		"\x02\x02&\xCE\x03\x02\x02\x02(+\x05\x04\x03\x02)+\x05\b\x05\x02*(\x03"+
		"\x02\x02\x02*)\x03\x02\x02\x02+\x03\x03\x02\x02\x02,-\x07\v\x02\x02-1"+
		"\x07/\x02\x02.0\x05\x06\x04\x02/.\x03\x02\x02\x0203\x03\x02\x02\x021/"+
		"\x03\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0231\x03\x02\x02\x02"+
		"45\x07\x0F\x02\x025\x05\x03\x02\x02\x026>\x05\x18\r\x027>\x05\n\x06\x02"+
		"89\x07\f\x02\x029:\x07\r\x02\x02:;\x05\x10\t\x02;<\x07\x0F\x02\x02<>\x03"+
		"\x02\x02\x02=6\x03\x02\x02\x02=7\x03\x02\x02\x02=8\x03\x02\x02\x02>\x07"+
		"\x03\x02\x02\x02?A\x05\x12\n\x02@?\x03\x02\x02\x02AB\x03\x02\x02\x02B"+
		"@\x03\x02\x02\x02BC\x03\x02\x02\x02C\t\x03\x02\x02\x02DE\x07\'\x02\x02"+
		"ER\x07/\x02\x02FO\x07)\x02\x02GL\x05\f\x07\x02HI\x07+\x02\x02IK\x05\f"+
		"\x07\x02JH\x03\x02\x02\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02"+
		"\x02\x02MP\x03\x02\x02\x02NL\x03\x02\x02\x02OG\x03\x02\x02\x02OP\x03\x02"+
		"\x02\x02PQ\x03\x02\x02\x02QS\x07*\x02\x02RF\x03\x02\x02\x02RS\x03\x02"+
		"\x02\x02SV\x03\x02\x02\x02TU\x07,\x02\x02UW\x05\x1A\x0E\x02VT\x03\x02"+
		"\x02\x02VW\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x05\x10\t\x02YZ\x07\x0F"+
		"\x02\x02Z\v\x03\x02\x02\x02[\\\x05\x1A\x0E\x02\\]\x07/\x02\x02]\r\x03"+
		"\x02\x02\x02^_\x07-\x02\x02_`\x05&\x14\x02`\x0F\x03\x02\x02\x02ac\x05"+
		"\x12\n\x02ba\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03"+
		"\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02gi\x05\x0E\b\x02hg\x03"+
		"\x02\x02\x02hi\x03\x02\x02\x02i\x11\x03\x02\x02\x02jp\x05\x1E\x10\x02"+
		"kp\x05$\x13\x02lp\x05\x18\r\x02mp\x05\n\x06\x02np\x05\x14\v\x02oj\x03"+
		"\x02\x02\x02ok\x03\x02\x02\x02ol\x03\x02\x02\x02om\x03\x02\x02\x02on\x03"+
		"\x02\x02\x02p\x13\x03\x02\x02\x02qt\x05\x1C\x0F\x02rt\x07%\x02\x02sq\x03"+
		"\x02\x02\x02sr\x03\x02\x02\x02tu\x03\x02\x02\x02uw\x07(\x02\x02vs\x03"+
		"\x02\x02\x02vw\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x07/\x02\x02y{\x07"+
		")\x02\x02z|\x05\x16\f\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02"+
		"\x02\x02}~\x07*\x02\x02~\x15\x03\x02\x02\x02\x7F\x84\x05&\x14\x02\x80"+
		"\x81\x07+\x02\x02\x81\x83\x05&\x14\x02\x82\x80\x03\x02\x02\x02\x83\x86"+
		"\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x17"+
		"\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x87\x88\x05\x1A\x0E\x02\x88\x89"+
		"\x07/\x02\x02\x89\x8A\x07\x16\x02\x02\x8A\x8B\x05&\x14\x02\x8B\x94\x03"+
		"\x02\x02\x02\x8C\x8D\x07%\x02\x02\x8D\x8F\x07(\x02\x02\x8E\x8C\x03\x02"+
		"\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x07/"+
		"\x02\x02\x91\x92\x07\x16\x02\x02\x92\x94\x05&\x14\x02\x93\x87\x03\x02"+
		"\x02\x02\x93\x8E\x03\x02\x02\x02\x94\x19\x03\x02\x02\x02\x95\x96\t\x02"+
		"\x02\x02\x96\x1B\x03\x02\x02\x02\x97\x9C\x07/\x02\x02\x98\x99\x07&\x02"+
		"\x02\x99\x9B\x07/\x02\x02\x9A\x98\x03\x02\x02\x02\x9B\x9E\x03\x02\x02"+
		"\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x1D\x03\x02\x02"+
		"\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA0\x07\x0E\x02\x02\xA0\xA1\x05&\x14"+
		"\x02\xA1\xA5\x05\x10\t\x02\xA2\xA4\x05 \x11\x02\xA3\xA2\x03\x02\x02\x02"+
		"\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02"+
		"\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xAA\x05\"\x12\x02"+
		"\xA9\xA8\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02"+
		"\xAB\xAC\x07\x0F\x02\x02\xAC\x1F\x03\x02\x02\x02\xAD\xAE\x07\x10\x02\x02"+
		"\xAE\xAF\x05&\x14\x02\xAF\xB0\x05\x10\t\x02\xB0!\x03\x02\x02\x02\xB1\xB2"+
		"\x07\x11\x02\x02\xB2\xB3\x05\x10\t\x02\xB3#\x03\x02\x02\x02\xB4\xBA\x07"+
		"\x14\x02\x02\xB5\xB6\x05&\x14\x02\xB6\xB7\x07\x13\x02\x02\xB7\xBB\x03"+
		"\x02\x02\x02\xB8\xB9\t\x03\x02\x02\xB9\xBB\x05&\x14\x02\xBA\xB5\x03\x02"+
		"\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x05\x10"+
		"\t\x02\xBD\xBE\x07\x0F\x02\x02\xBE%\x03\x02\x02\x02\xBF\xC0\b\x14\x01"+
		"\x02\xC0\xCF\x07\x07\x02\x02\xC1\xCF\x07\b\x02\x02\xC2\xCF\x07\t\x02\x02"+
		"\xC3\xCF\x07\n\x02\x02\xC4\xCF\x07/\x02\x02\xC5\xC6\x07\x1D\x02\x02\xC6"+
		"\xCF\x05&\x14\r\xC7\xC8\x07!\x02\x02\xC8\xCF\x05&\x14\f\xC9\xCF\x05\x14"+
		"\v\x02\xCA\xCB\x07)\x02\x02\xCB\xCC\x05&\x14\x02\xCC\xCD\x07*\x02\x02"+
		"\xCD\xCF\x03\x02\x02\x02\xCE\xBF\x03\x02\x02\x02\xCE\xC1\x03\x02\x02\x02"+
		"\xCE\xC2\x03\x02\x02\x02\xCE\xC3\x03\x02\x02\x02\xCE\xC4\x03\x02\x02\x02"+
		"\xCE\xC5\x03\x02\x02\x02\xCE\xC7\x03\x02\x02\x02\xCE\xC9\x03\x02\x02\x02"+
		"\xCE\xCA\x03\x02\x02\x02\xCF\xE7\x03\x02\x02\x02\xD0\xD1\f\t\x02\x02\xD1"+
		"\xD2\t\x04\x02\x02\xD2\xE6\x05&\x14\n\xD3\xD4\f\b\x02\x02\xD4\xD5\x07"+
		"\x1C\x02\x02\xD5\xE6\x05&\x14\t\xD6\xD7\f\x07\x02\x02\xD7\xD8\t\x05\x02"+
		"\x02\xD8\xE6\x05&\x14\b\xD9\xDA\f\x06\x02\x02\xDA\xDB\t\x06\x02\x02\xDB"+
		"\xE6\x05&\x14\x07\xDC\xDD\f\x05\x02\x02\xDD\xDE\t\x07\x02\x02\xDE\xE6"+
		"\x05&\x14\x06\xDF\xE0\f\x04\x02\x02\xE0\xE1\x07#\x02\x02\xE1\xE6\x05&"+
		"\x14\x05\xE2\xE3\f\x03\x02\x02\xE3\xE4\x07$\x02\x02\xE4\xE6\x05&\x14\x04"+
		"\xE5\xD0\x03\x02\x02\x02\xE5\xD3\x03\x02\x02\x02\xE5\xD6\x03\x02\x02\x02"+
		"\xE5\xD9\x03\x02\x02\x02\xE5\xDC\x03\x02\x02\x02\xE5\xDF\x03\x02\x02\x02"+
		"\xE5\xE2\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02"+
		"\xE7\xE8\x03\x02\x02\x02\xE8\'\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02"+
		"\x1A*1=BLORVdhosv{\x84\x8E\x93\x9C\xA5\xA9\xBA\xCE\xE5\xE7";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimplexParser.__ATN) {
			SimplexParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimplexParser._serializedATN));
		}

		return SimplexParser.__ATN;
	}

}
