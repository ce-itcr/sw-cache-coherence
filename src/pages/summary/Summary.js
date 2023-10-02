import React from "react";
import { useHistory } from "react-router-dom";
import CardResume from "src/components/Cards/CardResume";
import CardTable from "src/components/Cards/CardTable";
import Header from "src/components/Header/Header";


const Summary = () => {

    let history = useHistory();

    const checkOnClose = () => {
        history.push('/app');
    }


    return (
        <>
            <Header title={'/app/summary'} onClose={checkOnClose} onDownload={checkOnClose} />

            <section className="header relative pt-16 items-center flex h-screen max-h-860-px">

                <div className="container mx-auto px-4">
                    <div className="items-center flex flex-wrap">


                        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                            <div className="pt-32 sm:pt-0">
                                <CardTable />

                            </div>
                        </div>

                        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                            <div className="pt-32 sm:pt-0">
                                <CardResume />
                            </div>
                        </div>


                    </div>
                </div>

            </section>
        </>
    )

};

export default Summary;
