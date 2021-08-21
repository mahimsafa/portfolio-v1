import React from 'react'

const Contact = () => {

    const url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSekxx-QzDib9_WqcMCBDFV7_BQRAHNxr6M5v1fQwxFuTvmWJQ/formResponse"

    var submitted = false;




    return (
        <section id="contact">
            <div className="col-md-12">
                <div className="col-md-12">
                    <h1 className="section-title">
                        <span className="text-white">Contact</span>
                    </h1>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <iframe
                    name="hidden_iframe"
                    id="hidden_iframe"
                    style={{ display: 'none' }}
                    onLoad={submitted ? window.location = "https://google.com" : ''}
                    title="contact successsful"
                ></iframe>

                <form method="POST" action={url} target="hidden_iframe" onSubmit={submitted = true}>
                    <h1 className="title text-center mb-4">Talk to Me</h1>
                    <div className="form-group position-relative">
                        <label htmlFor="name" className="d-block">
                            <span class="iconify" data-icon="bx:bx-user"></span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="form-control form-control-lg thick"
                            placeholder="Name"
                            name="entry.2005620554"
                            required
                        ></input>
                    </div>
                    <div className="form-group position-relative">
                        <label htmlFor="email" className="d-block">
                            <i className="fas fa-envelope"></i>
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg thick"
                            placeholder="E-mail"
                            name="entry.1045781291"
                            required
                        ></input>
                    </div>
                    <div className="form-group position-relative">
                        <label htmlFor="subject" className="d-block">
                            <i className="fas fa-envelope"></i>
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="form-control form-control-lg thick"
                            placeholder="Subject"
                            name="entry.1065046570"
                        ></input>
                    </div>
                    <div className="form-group message">
                        <textarea
                            id="message"
                            className="form-control form-control-lg"
                            rows="7"
                            placeholder="Enter your message here..."
                            name="entry.839337160"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" tabIndex="-1">Send message</button>
                    </div>
                </form>
            </div>


        </section >
    )
}

export default Contact
