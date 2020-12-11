import React from 'react'
import DetailPresenter from './DetailPresenter'
import {moviesApi, tvApi} from "../../api";

export default class extends React.Component {
    constructor(props) {
        super(props);
        const {location:{pathname}} = this.props;
        this.state = {
            result:null,
            error: null,
            loading: true,
            isMovie : pathname.includes("/movie/")
        }
    }



    async componentDidMount(){
        const {match:{params:{id}},history:{push}} = this.props;

        const parsedId = parseInt(id);
        const {isMovie} = this.state;
        if (isNaN(parsedId)) {
            return push("/");
        }
        let result;

        try {
            if (isMovie) {
                ({data: result} = await moviesApi.movie(parsedId));
            } else {
                ({data :result} = await tvApi.show(parsedId));
            }
            this.setState({result})
        } catch {
            this.setState({error:"Can't find anyting"})
        } finally {
            this.setState({loading:false,result})
        }

    }

    render() {
        const {result, error, loading} = this.state;
        console.log(this.state);
        return <DetailPresenter
            result={result}
            error={error}
            loading={loading}/>

    }
}