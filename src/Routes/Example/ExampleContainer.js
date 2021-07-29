import React from 'react'
import ExamplePresenter from "./ExamplePresenter";
import ApiCalendar from 'react-google-calendar-api';

export default class extends React.Component {
    //
    constructor(props) {
        super(props);
        this.state = {
            id:null
        }
    }

    componentDidMount() {
        //
    }

    createc = () => {
        //
    //     event = {
    //         'summary': 'itsplay의 OpenAPI 수업', # 일정 제목
    //     'location': '서울특별시 성북구 정릉동 정릉로 77', # 일정 장소
    //     'description': 'itsplay와 OpenAPI 수업에 대한 설명입니다.', # 일정 설명
    //     'start': { # 시작 날짜
    //         'dateTime': today + 'T09:00:00',
    //             'timeZone': 'Asia/Seoul',
    //     },
    //     'end': { # 종료 날짜
    //         'dateTime': today + 'T10:00:00',
    //             'timeZone': 'Asia/Seoul',
    //     },
    //     'recurrence': [ # 반복 지정
    //         'RRULE:FREQ=DAILY;COUNT=2' # 일단위; 총 2번 반복
    // ],
    //         'reminders': { # 알림 설정
    //         'useDefault': False,
    //             'overrides': [
    //             {'method': 'email', 'minutes': 24 * 60}, # 24 * 60분 = 하루 전 알림
    //             {'method': 'popup', 'minutes': 10}, # 10분 전 알림
    //         ],
    //     },
    // }
        // const eventFromNow = {
        //     summary: 'Poc Dev From Now',
        //     time: 480,
        //     timeZone:'Asia/Seoul'
        // };
        const event = {
            summary: 'itsplay의 OpenAPI 수업',
            start: {
                'dateTime': new Date().toISOString(),
            },
            end: {
                'dateTime': new Date(new Date().getTime() + 2 * 60000),
            },
            timeZone:'Asia/Seoul',
            reminders: { //# 알림 설정
                useDefault: "False",
            'overrides': [
            {
                method: 'email',
                minutes: 24 * 60
            }, //# 24 * 60분 = 하루 전 알림
            {
                method: 'popup',
                minutes: 10
            }, //# 10분 전 알림
        ],
    },

    }

        // ApiCalendar.createEventFromNow(event)
        //     .then((result) => {
        //         const {result: {id}} = result
        //         this.setState({id})
        //         console.log(id)
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        ApiCalendar.createEvent(event)
            .then((result) => {
                const {result: {id}} = result
                this.setState({id})
                console.log(id)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deletec = ()=>{
        //
        const {id} = this.state
        console.log(id);
        ApiCalendar.deleteEvent(id).then(console.log).catch((err)=>console.log(err));
    }

    updatec = () => {
        //
        const event = {
            summary: 'update',
        };
        const {id} = this.state
        console.log(id);
        ApiCalendar.updateEvent(event, id).then(console.log);
    }

    sample2=(e)=>{

        if (e.target.value === 'logout') {
            console.log(e.target.value)
            ApiCalendar.handleSignoutClick();
        } else {
            console.log(1)
            console.log(e.target.value)
            ApiCalendar.handleAuthClick();
        }
    }

    render() {
        return <ExamplePresenter
            createc={this.createc}
            sample2={this.sample2}
            deletec={this.deletec}
            updatec={this.updatec}
            />
    }
}