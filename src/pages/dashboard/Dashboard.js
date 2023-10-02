import React, { useEffect, useState } from "react";
import CardLines from "src/components/Cards/CardLines";
import CardLogger from "src/components/Cards/CardLogger";
import CardStats from "src/components/Cards/CardStats";
import Header from "src/components/Header/Header";
import { useHistory } from "react-router-dom";


const Dashboard = () => {

    const [currentProtocol, setCurrentProtocol] = useState('');
    const logs = [
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        'console.log("Mensaje 1");',
        
      ];

    let history = useHistory();

    useEffect(() => {
        setCurrentProtocol(localStorage.getItem('protocol'));
    }, [])

    const checkOnResume = () => {
        history.push('/app/summary');
    }

    return (
        <>
            <Header title={'/app/dashboard'} onResume={checkOnResume} />

            <section className="header relative pt-16 items-center flex h-screen max-h-860-px">

                <div className="container mx-auto px-4">
                    <div className="items-center flex flex-wrap">


                        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                            <div className="pt-32 sm:pt-0">
                                <div style={{ paddingTop: 60, paddingBottom: 5 }}>
                                    <CardStats
                                        statSubtitle=""
                                        statTitle="PE#1"
                                        code={['WRITE 4', 'READ 12', 'WIRTE 3', 'READ 10', 'INC', 'READ 12', 'WIRTE 3', 'READ 10', 'INC']}
                                        lines={[
                                            { key: 'I', value: '00010' },
                                            { key: 'S', value: '01010' },
                                            { key: 'S', value: '01110' },
                                            { key: 'I', value: '10010' }
                                        ]}
                                        status="Executing INC"
                                    />
                                </div>
                                <div style={{ paddingBottom: 5 }}>
                                    <CardStats
                                        statSubtitle=""
                                        statTitle="PE#2"
                                        code={['WRITE 4', 'READ 12', 'WIRTE 3', 'READ 10', 'INC']}
                                        lines={[
                                            { key: 'I', value: '00010' },
                                            { key: 'S', value: '01010' },
                                            { key: 'I', value: '01110' },
                                            { key: 'S', value: '10010' }
                                        ]}
                                        status="Waiting for a response from CC"
                                    />
                                </div>
                                <div>
                                    <CardStats
                                        statSubtitle=""
                                        statTitle="PE#3"
                                        code={['WRITE 3', 'READ 2', 'READ 12', 'INC']}
                                        lines={[
                                            { key: 'S', value: '00010' },
                                            { key: 'S', value: '01010' },
                                            { key: 'I', value: '01110' },
                                            { key: 'I', value: '10010' }
                                        ]}
                                        status="Executing INC"
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                            <div className="pt-32 sm:pt-0">
                                <div style={{ paddingTop: 60, paddingBottom: 20 }}>
                                    <CardLines />
                                </div>
                                <div>
                                    <CardLogger logs={logs} protocol={currentProtocol} />
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
