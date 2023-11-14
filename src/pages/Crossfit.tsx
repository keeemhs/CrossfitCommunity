import './css/Crossfit.scss';
import AroundCrossfit from './img/AroundCrossfit.png';

import GregGlassman from './img/GregGlassman.png';

const Crossfit = () => {
    return (
        <>
            <div className="main_part">
                <section className="title">
                    <h1>What is Crossfit?</h1>
                </section>

                <section className="explain_1">
                    <h3>CrossFit(크로스핏) 이란?</h3>
                    <img src={AroundCrossfit} className="AroundCrossfit" />
                    <h5 className="red">Cross training + Fitness = Crossfit</h5>
                    <div className="explain_1_1">
                        <span>여러 종목의 운동을 섞어서 한다는 뜻의 크로스 트레이닝(cross training)과</span>
                        <span>신체의 활동을 뜻하는 피트니스(fitness)의 함성어다.</span>
                        <span>1990년대 미국에서 경찰 특공대, 군인, 소방관 등의 훈련을 위해 고안되었으며,</span>
                        <span>우리나라에는 2009년부터 유행하기 시작했다.</span>
                        <br />
                        <span>프로그램에 따라 차이는 있지만 일반적으로 근력 운동과 유산소 운동을 섞어 체력, 근력,</span>
                        <span>민첩성, 심폐지구력, 유연성, 속도, 균형감각, 정확성 등을 발달되도록 고안되었다.</span>
                        <span>고강도의 훈련을 통해 최단 시간에 최대 효과를 낼 수 있으며,</span>
                        <span>체력에 맞게 운동 강도를 조절해 남녀노소 누구나 부담 없이 즐길 수 있다는 장점이 있다.</span>
                    </div>
                    <hr />
                    <div className="explain_card">
                        <div className="explain_1_2">
                            <img src={GregGlassman} className="GregGlassman" />
                            <div className="explain_1_2_2">
                                <span>크로스핏의 창시자: 그레그 글래스먼(Greg Glassman)</span>
                                <span>'Greg Glassman'은 한쪽으로 치우치지 않는 총제적인</span>
                                <span>체력을 기르기 위해 사람의 신체 능력을 심폐지구력,</span>
                                <span>협응력, 밸런스, 민첩성, 스피드, 힘, 유연성, 근지구력,</span>
                                <span>등 10개 항목으로 나누고 이를 골고루 발달 시킬 수 있는</span>
                                <span>W.O.D(Wrokout of the Day)을 개발하였습니다.</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
export default Crossfit;
