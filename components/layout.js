import Head from 'next/head';
import Header from './header/header';
import HomeHeader from './home-header/HomeHeader';
import styles from './layout.module.css';

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Web app for tip based workers to keep better track of there money'
				/>
			</Head>
            <>
                {!home ? (
                    <Header />
                ) : (
                    <HomeHeader />
                )}
            </>
            <main>{children}</main>
		</div>
	);
}
