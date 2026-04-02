---
name: polars
description: Guidance for writing Polars code.
---

## What I do
I provide a guide to how to write Python Polars code.

## When to use me
Use this skill whenever you are writing, reviewing, or auditing code that uses the Polars library for data manipulation.

## Prefer using data contracts in function signatures
Whenever possible, use a Patito data contract in the type hints of function signatures, e.g. `def
foo() -> pt.DataFrame[DataContract]` instead of `def foo() -> pl.DataFrame`. Search the code for
existing Patito data contracts and re-use existing contracts if possible. If a relevant Patito data
contract doesn't exist then consider creating one.

## Polars style guide
When working with Polars DataFrames, prefer these more readable and idiomatic patterns:

- **Casting:** Instead of `df.with_columns([pl.col("foo").cast(pl.UInt8)])`, use `df.cast({"foo": pl.UInt8})`.
- **Named Columns:** Instead of `df.with_columns([pl.col("foo").some_expression().alias("bar")])`, use `df.with_columns(bar=pl.col("foo").some_expression())`.

