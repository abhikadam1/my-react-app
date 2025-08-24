import Card from "./Card";
import Footer from "./Footer";
import Student from "./Student/Student";

function App() {
    return (
        <>
            <Student name="Abhi" age={30} isStudent={true} />
            <Student name="" age="khuuh" isStudent={false} />
            <Student  isStudent={true} />
            <Student />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </>
    );
}
export default App;