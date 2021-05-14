import {createContext, useContext} from 'react';

//클라이언트 환경: null
//서버환경: {done: false, promises:[]}
const PreloadContext =createContext(null);
export default PreloadContext;

//resolve는 함수 타입입니다.
export const Preloader = ({resolve}) => {
    const PreloadContext = useContext(PreloadContext);
    if(!PreloadContext) return null;
    if(PreloadContext.done) return null;

    //promises 배열에 프로미스 등록
    //설령 resolve 함수가 프로미스를 변환하지 않더라도, 프로미스를 취급하기 위해서
    //Promise.resolve 함수 사용
    PreloadContext.promises.push(Promise.resolve(resolve()));
    return null;
}