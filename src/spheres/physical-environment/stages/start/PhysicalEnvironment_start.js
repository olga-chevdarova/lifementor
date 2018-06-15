import React, {Component} from 'react';
import picture from './physical_environment.jpg'

class PhysicalEnvironment_start extends Component {
    render() {
        return (
            <div className="main row">
                <div className="col-5"> <img className="img-fluid" src={picture} alt=""/></div>
                <div className="col-7">
                    <h4>Физическое окружение</h4>
                    <br/>
                    <p>
                        <cite>
                            “У домов, как у людей, есть своя душа и свое лицо, на котором отражается их внутренняя сущность.”<br/> –
                            Александр Дюма </cite>
                        <br/>
                        <br/>
                       <p>
                           Жизнь будет менее напряженной. Гораздо проще тратить немного времени на уборку ежедневно, чем устранять безнадежно застарелую грязь. А ведь рано или поздно это придется сделать. Несколько минут ежедневно помогут сэкономить целый выходной. Не откладывайте все на потом – идите и займитесь уборкой сейчас.
                       </p>
                        <p>
                            Чем меньше в доме вещей, тем менее хаотичным он будет казаться. Зачем перекладывать хлам с места на место во время уборки. Просто избавьтесь от того, чем вы не пользуетесь.
                        </p>
                    </p>
                </div>
            </div>

        );
    }
}

export default PhysicalEnvironment_start;