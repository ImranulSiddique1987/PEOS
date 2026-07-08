# @peos/tailwind

Shared Tailwind CSS configuration package for the PEOS monorepo.

## Purpose

This package provides a reusable base Tailwind configuration that can be shared across applications in the repository.

Applications should extend this configuration and define their own `content` paths.

## Usage

```js
import config from "@peos/tailwind";

export default {
  ...config,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};
```
