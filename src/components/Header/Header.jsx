import PageWrapper from '../PageWrapper/PageWrapper';
import styles from './header.module.css'
// import img from '../../images/10844370.png'
import Logo from '../Logo/Logo'
import { useState } from 'react';


const Header = ({ setCoordinates }) => {
    const [searchString, setSearchString] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        const apiKey = '54d7ff260ae0839a16f55b92aaa0c556';
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchString}&limit=1&appid=${apiKey}`);
            const data = await response.json();
            setCoordinates({ lat: data[0].lat, lon: data[0].lon });
            setSearchString('');
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    return (
        <div className={styles['common']}>
            <PageWrapper>
                <header className={styles['header']}>
                    {/* <h1>SkyView</h1> */}
                    <Logo />

                    {/* <i class="fa-solid fa-cloud-moon"></i> */}
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            placeholder="Enter City" 
                            value={searchString}
                            onChange={event => setSearchString(event.currentTarget.value)}/>
                    </form>
                </header>
            </PageWrapper>

        </div>
    )
}

export default Header;