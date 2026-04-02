# Skill: polars

## Polars Style Hints

When working with Polars DataFrames, prefer these more readable and idiomatic patterns:

- **Casting:** Instead of `df.with_columns([pl.col("foo").cast(pl.UInt8)])`, use `df.cast({"foo": pl.UInt8})`.
- **Named Columns:** Instead of `df.with_columns([pl.col("foo").some_expression().alias("bar")])`, use `df.with_columns(bar=pl.col("foo").some_expression())`.

## When to use me
Use this skill whenever you are writing, reviewing, or auditing code that uses the Polars library for data manipulation.
