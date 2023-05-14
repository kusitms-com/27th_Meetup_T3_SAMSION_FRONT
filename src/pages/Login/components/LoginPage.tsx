import styled from 'styled-components';

const ContentWrapper = styled.div`
    img {
        width : 100%;
        height : auto;
        content-fit : cover;
    }
`
const LoginWrapper = styled.div`
    width : 20vw;
    height  15vw;
    position : absolute;
    top : 21vw;
    left : 58vw;
    display : flex;
    flex-direction : column;
    align-items: center;

    div.title { 
        font-family: ${(props) => props.theme.font.family.pretendard_bold};
        font-size : 1.5vw;
    }
`
const ButtonWrapper = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    gap: 1.5vw;

    button {
        all: unset;
        border : none;
        cursor: pointer;
    };
`
const LoginPage = () => {
    return (
        <ContentWrapper>
            <img src="/img/LoginBg.svg" />
            <LoginWrapper>
                <div className='title'>소셜 로그인</div>
                <ButtonWrapper>
                    <button>
                        <img src="/img/NaverLogin.svg" />
                    </button>
                    <button>
                        <img src="/img/GoogleLogin.svg" />
                    </button>
                </ButtonWrapper>
            </LoginWrapper>
        </ContentWrapper>
    )
}
export default LoginPage;