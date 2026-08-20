"use client";

import { useReducer } from "react";

type BookingState = {
  step: number;
  typeId: string | null;
  day: number | null;
  time: string | null;
  name: string;
  email: string;
};

type BookingAction =
  | { type: "SELECT_TYPE"; id: string }
  | { type: "SELECT_DAY"; day: number }
  | { type: "SELECT_TIME"; time: string }
  | { type: "SET_NAME"; value: string }
  | { type: "SET_EMAIL"; value: string }
  | { type: "GO_TO_DETAILS" }
  | { type: "GO_TO_REVIEW" }
  | { type: "CONFIRM" }
  | { type: "BACK" };

const initialState: BookingState = {
  step: 0,
  typeId: null,
  day: 17,
  time: null,
  name: "",
  email: "",
};

function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case "SELECT_TYPE":
      return { ...state, typeId: action.id, step: 1 };

    case "SELECT_DAY":
      return { ...state, day: action.day };

    case "SELECT_TIME":
      return { ...state, time: action.time };

    case "SET_NAME":
      return { ...state, name: action.value };

    case "SET_EMAIL":
      return { ...state, email: action.value };

    case "GO_TO_DETAILS":
      if (!state.time) return state;
      return { ...state, step: 2 };

    case "GO_TO_REVIEW":
      if (!state.name || !state.email) return state;
      return { ...state, step: 3 };

    case "CONFIRM":
      return { ...state, step: 4 };

    case "BACK":
      return { ...state, step: Math.max(0, state.step - 1) };

    default:
      return state;
  }
}

export function useBookingForm() {
  const [state, dispatch] = useReducer(bookingReducer, initialState);
  return { state, dispatch };
}