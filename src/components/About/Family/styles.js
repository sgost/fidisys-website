import styled from 'styled-components';

export const FamilyContainer = styled.div`
background-color: #000000;
padding: 5.79710144927536vw 8vw 8.69565217391304vw 8vw;
h1 {
    font-weight: bold;
    font-size: 2.89855072463768vw;
    line-height: 3.76811594202899vw;
    color: #EEEEEE;
    text-align: center;
    margin: 0 0 6.52173913043478vw 0;
}
#cardsContainer {
    display: grid;
    width: fit-content;
    gap: 2.57246376811594vw;
    grid-template-columns: 17.1vw 17.1vw 17.1vw 17.1vw;
    height: auto;
    margin: auto;
}
#cardsContainer #cards {
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 2.02898550724638vw;
    background: #1F1F29;
}
#cardsContainer #cards img{
    width: 100%;
    height: 16.1vw;
    border-radius: 1vw;
    @media (max-width: 750px) {
      height: 44vw;
    }
}
#cardsContainer #cards p {
    font-size: 1.2vw;
    font-style: normal;
    font-weight: bold;
    margin:24px 0 0 0;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
}
#cardsContainer #cards p:nth-child(3) {
    font-style: normal;
    font-weight: normal;
    font-size: 1.05vw;
    margin:0;
    color: rgba(255, 255, 255, 0.9);
}
#cardsContainer #cards a{
    width: 8vw;
    height: 5vw;
    position: relative;
    margin: auto;
    @media (max-width: 750px) {
        width: 16vw;
        margin: 1.5vw auto auto auto;
    }
}
#cardsContainer #cards a .btn{
    width: 100%;
    height: 100%;
    transition: 0.5s ease-in-out;
    position: absolute;
}
#cardsContainer #cards a:hover #btn {
    display: none;
}
@media (max-width:750px){
    padding: 20vw 6vw 12vw 6vw;
    h1 {
        font-size: 5vw;
        line-height: auto;
        margin: 0 0 9vw 0;
    }
     #cardsContainer {
        display: grid;
        gap: 3.5vw;
        grid-template-columns: 42.5vw 42.5vw;
        height: auto;
    }
    #cardsContainer #cards p {
        font-size: 2.5vw;
    }
    #cardsContainer #cards p:nth-child(3) {
        font-size: 2vw;
    }
}
`;