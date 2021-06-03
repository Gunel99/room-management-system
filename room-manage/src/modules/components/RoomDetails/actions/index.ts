import { ROOM_ACTIONS } from "./consts";
import { IReservation } from "../../../../models";

export function addReservation(reservation: IReservation) {
    return {
        type: ROOM_ACTIONS.ADD_RESERVATION,
        payload: reservation,
    };
};