import styles from './ErrorPage.module.css';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../Icons/home.svg';


function ErrorPage() {
    const { language } = useLanguage();

    return (
        <div className={styles.container}>
            <h1>
                {language === 'fr' ? "Euh! Cette Page n'existe pas" : "Ops! Questa pagina non esiste"}
            </h1>
            <Link to="/" className={styles.subContainer}>
                <Home className={styles.icon} title ="Acceuil"/>
                <p>Retournez au page d'acceuil</p>
            </Link>
        </div>
    );
}

export default ErrorPage;
