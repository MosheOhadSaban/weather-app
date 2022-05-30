export default interface IErrorToast {
    isErrorToast:boolean;
    setIsErrorToast:Function;
    errorMessage:string | null;
    delayTime:number;

}