import slackImage from "../assets/slack.png"
import githubImage from "../assets/github-icon.png"

export default function Body() {
    const myTwitterLink = "https://twitter.com/MahmudEnesi?t=64VdroylYD7_shpdaB5fhQ&s=09";
    const zuriTraining = "https://training.zuri.team/"
    const books = "http://books.zuri.team/";
    const book_python = "https://books.zuri.team/python-for-beginners?ref_id=Enesi";
    const pitch = "https://background.zuri.team";
    const design_rules = "https://books.zuri.team/design-rules";

    return (
        <div className="wrapper">
            <div className="body">
                <a 
                href={myTwitterLink} 
                id="myTwitterLink" 
                title="My twitter link">Twitter Link</a>
                <a 
                href={zuriTraining} 
                id="btn__zuri" 
                title="Zuri Training Team">Zuri Team</a>
                <a 
                href={books} 
                id="books" 
                title="This is where you find books about design and coding">Zuri Books</a>
                <a 
                href={book_python} 
                id="book__python" 
                title="Python featured Books">Python Books</a>
                <a 
                href={pitch} 
                id="pitch" 
                title="This is where you pitch a service for doing background checks on coders">Background Check for Coders</a>
                <a 
                href={design_rules} 
                id="book__design" 
                title="This is where you pitch the free design book offered by Zuri">Design Books</a>
            </div>
            <div className="socials">
                <img 
                src={slackImage} 
                alt="slack image" />
                <a 
                href="https://github.com/Mahmud1087" 
                title="github account">
                    <img 
                    src={githubImage} 
                    alt="github image" 
                    />
                </a>
            </div>


        </div>
    )
}