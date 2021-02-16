import React from 'react';
import faq from './faq';
import './styles.css';

const FAQ = () => {
  const FAQList = () => {
    function NewlineText(props) {
      const text = props.text;
      return text.split('\n').map((str, index) => <p key={index}>{str}</p>);
    }

    return (
      <div className="container">
        {faq.map((q) => {
          return (
            <div className="row" key={q.id}>
              <div className="col-md-12">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div
                      className="panel-heading"
                      role="tab"
                      id={'heading' + q.id}
                    >
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href={`#collapse${q.id}`}
                          aria-expanded="false"
                          aria-controls={`collapse${q.id}`}
                        >
                          {q.question}
                        </a>
                      </h4>
                    </div>
                    <div
                      id={`collapse${q.id}`}
                      className="panel-collapse collapse in"
                      role="tabpanel"
                      aria-labelledby={'heading' + q.id}
                    >
                      <div className="panel-body">
                        <NewlineText text={q.answer}></NewlineText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <h1 className="page-header">Често Здавани Въпроси</h1>
      <FAQList />
    </div>
  );
};

export default FAQ;
