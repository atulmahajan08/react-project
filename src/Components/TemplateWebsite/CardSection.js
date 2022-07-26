import React from 'react';
import Card from './Card';


const CardSection = () => {
    return (
        <section className="contact bg-success ">
            <div className="container ">
                <h2 className="text-white">
                    We love new friends!
                </h2>
                <div className="row">
                    <div className="col-4">
                        <Card title="Atul card" buttonText="atul button" />
                    </div>
                    <div className="col-4">
                        <Card title="Jack card" buttonText="jack button" />
                    </div>
                    <div className="col-4">
                        <Card title="Roy card" buttonText="Roy button" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardSection;