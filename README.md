**Playwright Test Agents**
**Introduction**
Playwright comes with three Playwright Test Agents out of the box: 🎭 planner, 🎭 generator and 🎭 healer.

These agents can be used independently, sequentially, or as the chained calls in the agentic loop. Using them sequentially will produce test coverage for your product.

🎭 planner explores the app and produces a Markdown test plan
🎭 generator transforms the Markdown plan into the Playwright Test files
🎭 healer executes the test suite and automatically repairs failing tests

**Playwright MCP**
A Model Context Protocol (MCP) server that provides browser automation capabilities using Playwright. 
This server enables LLMs to interact with web pages through structured accessibility snapshots, bypassing the need for screenshots or visually-tuned models.

**Playwright MCP vs Playwright CLI**
This package provides MCP interface into Playwright. If you are using a coding agent, you might benefit from using the CLI+SKILLS instead.

CLI: Modern coding agents increasingly favor CLI–based workflows exposed as SKILLs over MCP 
because CLI invocations are more token-efficient: they avoid loading large tool schemas and verbose accessibility trees into the model context, allowing agents to act through concise, purpose-built commands. This makes CLI + SKILLs better suited for high-throughput coding agents that must balance browser automation with large codebases, tests, and reasoning within limited context windows.
Learn more about Playwright CLI with SKILLS.

MCP: MCP remains relevant for specialized agentic loops that benefit from persistent state, rich introspection, 
and iterative reasoning over page structure, such as exploratory automation, self-healing tests, or long-running autonomous workflows
where maintaining continuous browser context outweighs token cost concerns.
