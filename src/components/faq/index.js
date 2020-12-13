import React from 'react'
import faq from './faq'
import './styles.css'

const FAQ = () => {

    const FAQList = () => {
        function NewlineText(props) {
            const text = props.text;
            return text.split('\n').map((str, index) => <p key={index}>{str}</p>);
        }

        return <div id="accordion" className='container'>
            {faq.map(q => {
                return <div className='card' key={q.id}>
                    <div className="card-header" id={'heading' + q.id} role="tab">
                        <h3 className="mb-0 ">
                            <button className="btn btn-link " data-toggle="collapse" data-target={`#collapse${q.id}`} aria-expanded="false" aria-controls={`collapse${q.id}`}>
                                {q.question}
                            </button>
                        </h3>

                    </div>
                    <div id={`collapse${q.id}`} className="collapse " aria-labelledby={'heading' + q.id} data-parent="#accordion">
                        <div className="card-body">
                            <NewlineText text={q.answer}></NewlineText>
                        </div>
                    </div>
                </div>
            })}
        </div>
    }

    return (
        <div>
            <h1 className='page-header'>Често Здавани Въпроси</h1>
            <FAQList />
        </div >
    )
}

export default FAQ