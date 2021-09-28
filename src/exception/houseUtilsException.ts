// eslint-disable-next-line no-shadow
export enum ErrorCode {
  INVALID_REQUEST = '잘못된 요청입니다.',
  INTERNAL_ERROR = '알 수 없는 에러가 발생했습니다.',
  ENTITY_NOT_FOUND = '데이터를 찾을 수 없습니다.',
}

export class HouseUtilsException extends Error {
  constructor(errorCode: ErrorCode, customMessage: string) {
    super(customMessage);
    this.name = errorCode;

    Object.setPrototypeOf(this, HouseUtilsException.prototype);
  }
}
