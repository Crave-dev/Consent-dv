'use strict'

const e = React.createElement

function Popup() {
    return (<div className="content-ac">
        <ImageWrapper/>
        <ConsentBody/>
    </div>)
}

function ImageWrapper() {
    return (<p className="text-hd">
        <Image/>
    </p>)
}

function ConsentBody() {
    return (<p className="text-ac">
        <ConsetLabel/>
        <br/>
        <ConsetContent/>
        <InformationButton/>
        <AcceptButton/>
    </p>)
}

function Image() {
    return (
        <img className="img-ac" src="https://www.thaitravelcenter.com/template/theme/images/TTC-4.png" alt="Thai Travel Center"/>
    )
}

function ConsetLabel() {
    return (<label className="head-consent">ความยินยอมข้อมูลส่วนบุคคลของคุณ</label>)
}

function ConsetContent() {
    const mediaMatch = window.matchMedia('(max-width: 480px)')
    const [matches, setMatches] = React.useState(mediaMatch.matches);
    const [] = React.useState(false)

    React.useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    })

    return (matches ? <ConsetContentMobile /> 
            : <span className="text-consent" id="text-consent">ไทยทราเวลเซ็นเตอร์ พัฒนาแพลตฟอร์มของเราอยู่ตลอดเวลาเพื่อมอบประสบการณ์การใช้เว็บไซต์ให้ดียิ่งขึ้น และส่วนสำคัญที่เราใช้พัฒนาระบบก็คือข้อมูลต่างๆ ของคุณ ในขณะเดียวกันเราให้ความสำคัญต่อความเป็นส่วนตัว และจะทำงานอย่างดีที่สุดเพื่อรักษาความลับ และควบคุมข้อมูลส่วนบุคคลของคุณให้ปลอดภัย</span>
            )
}

function ConsetContentMobile() {
    return (
        <span className="text-consent-mobile">
            <React.Fragment>
                ไทยทราเวลเซ็นเตอร์ พัฒนาแพลตฟอร์มของเราอยู่ตลอดเวลาเพื่อมอบประสบการณ์การใช้เว็บไซต์ให้ดียิ่งขึ้น และส่วนสำคัญที่เราใช้พัฒนา...
                <span style={{ cursor: 'pointer'}} target="_blank"><b>อ่านต่อ</b></span>
            </React.Fragment>
        </span>)
}

function InformationButton() {
    return (<a href="https://www.thaitravelcenter.com/termcondition/" target="_blank" style={{ textDecoration: 'none', color: 'inherit'}}>
        <span className="btn-ac">ดูรายละเอียด</span>
    </a>)
}

function AcceptButton() {
    const acceptConsent = () => {
        if(!window.__cfRLUnblockHandlers) {
            window.alert('can not accepted!')
            return false
        }
        window.alert('accepted!')
    }
    return (<span className="btn-ac" onClick={acceptConsent}>
        ให้ความยินยอม
    </span>)
}

const container = document.querySelector('#consent-popup')
const root = ReactDOM.createRoot(container)
root.render(<Popup />)