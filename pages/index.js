import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Web app for tip based workers to keep better track of there money'
				/>
			</Head>
			<header className={styles.header_container}>
				<h1 className={styles.tips_header}>tips.</h1>
				<div className={styles.cta}>
					<p>Keep track of your money.</p>
					<Link href='/dashboard'>
						<a>Create an account</a>
					</Link>
				</div>
			</header>
			<nav className={styles.nav}>
				<ul className={styles.nav_list}>
					<li>
						<Link href='/dashboard'>
							<a>login</a>
						</Link>
					</li>
					<li>
						<Link href='/dashboard'>
							<a>sign up</a>
						</Link>
					</li>
				</ul>
			</nav>
			<main>
				<div className={styles.about}>
					<h2 className={utilStyles.headingLg}>
						The service industry isn't a 'fake' job.
					</h2>
					<p>
						The money definitely isn't. Keep track of your income
						like a 'real' adult. Making informed financial decisions
						is infinitely easier when you actually know your
						finances.
					</p>
				</div>
				<div className={styles.demo_creds}>
					<div>
						<h3>Demo Credentials</h3>
						<p>
							email: foo@bar.com <br />
							password: password
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
