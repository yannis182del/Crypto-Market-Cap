import { useState } from "react";

export function useData(initialValue) {
    return useState(initialValue);
  }