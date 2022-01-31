import React from 'react'

export const SeacrhScreen = () => {
    return (
        <div>
              <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />
                    <form>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                        />
                     
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />
                </div>
            </div>

        </div>
    )
}
