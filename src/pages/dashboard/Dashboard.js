import React, { useEffect, useState } from "react";
import CardLines from "src/components/Cards/CardLines";
import CardLogger from "src/components/Cards/CardLogger";
import CardStats from "src/components/Cards/CardStats";
import Header from "src/components/Header/Header";
import { useHistory } from "react-router-dom";


const Dashboard = () => {

    const [currentProtocol, setCurrentProtocol] = useState('');
    
    let history = useHistory();

    useEffect(() => {
        setCurrentProtocol(localStorage.getItem('protocol'));
    }, [])

    const checkOnResume = () => {
        history.push('/app/summary');
    }

    return (
        <>
            <Header title={'/app/dashboard'} onResume={checkOnResume}/>

            <section className="header relative pt-16 items-center flex h-screen max-h-860-px">

                <div className="container mx-auto px-4">
                    <div className="items-center flex flex-wrap">


                        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                            <div className="pt-32 sm:pt-0">
                                <div style={{paddingTop: 60,paddingBottom: 20}}>
                                    <CardStats
                                        statSubtitle=""
                                        statTitle="PE#1"
                                        statIconColor="bg-orange-500"
                                        code={['asdasd', 'asdasdasd']}
                                    />
                                </div>
                                <div style={{paddingBottom: 20}}>
                                    <CardStats
                                        statSubtitle=""
                                        statTitle="PE#1"
                                        statIconColor="bg-orange-500"
                                        code={['asdasd', 'asdasdasd']}
                                    />
                                </div>
                                <div>
                                    <CardStats
                                        statSubtitle=""
                                        statTitle="PE#1"
                                        statIconColor="bg-orange-500"
                                        code={['asdasd', 'asdasdasd']}
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                            <div className="pt-32 sm:pt-0">
                                <div style={{paddingTop: 60,paddingBottom: 20}}>
                                    <CardLines />
                                </div>
                                <div>
                                    <CardLogger statIconColor="bg-orange-500" protocol={currentProtocol}/>
                                </div>

                            </div>
                        </div>

                 
                    </div>
                </div>

            </section>

        </>
    )

};

export default Dashboard;
