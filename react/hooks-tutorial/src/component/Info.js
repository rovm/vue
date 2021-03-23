import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log({
    //         name,
    //         nickname
    //     })
    // }, [name]); 
    /* 두번쨰 인자에 빈 []를 넣어주면, 마운트 될때만 실행.
    *  []안에 넣은 파라미터가 바뀔떄마다 실행
    */

    useEffect(() =>{
        console.log('effect');
        console.log(name);
        return() => {
            console.log('cleanup');
            console.log(name);
        };
    }, [name]);

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value)
    };

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}></input>
                <input value={nickname} onChange={onChangeNickname}></input>
                <div>
                    <div>
                        <b>이름:</b> {name}
                    </div>
                    <div>
                        <b>닉넴임:</b> {nickname}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Info;