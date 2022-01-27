import React from "react";

function Highlight (Component, CompNew, CompPop) {

    return class extends React.Component {

        render () {
            if (this.props.views < 100) {
                return (
                    <CompNew >
                        <Component {...this.props} />
                    </CompNew >
                )
            }
            if (this.props.views > 1000) {
                return (
                    <CompPop >
                        <Component {...this.props} />   
                    </CompPop>
                )
            }
            return <Component {...this.props} />
        }
    }

}

export default Highlight;