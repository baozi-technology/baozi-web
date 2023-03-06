import React, {useState, useEffect} from "react";
import styles from "./BioContent.module.scss";
import PropTypes from "prop-types";
import {Link} from "gatsby";

const BioContent = (props) => {
	const meEatingBaozi = "/avatars/me-eating-baozi-square-transparent.gif";
	const meNormal = "/avatars/nico_catch_yuting.jpg";
	const IMAGES = [meEatingBaozi, meNormal];

	const [imgsLoaded, setImgsLoaded] = useState(false);
	const [click, setClick] = useState(false);

	function preLoadImage(imgFileName, resolve, reject) {
		const img = new Image();
		img.src = imgFileName;
		img.onload = () => resolve(img.url);
		img.onerror = (err) => reject(err);
	}

	// https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js
	// https://codesandbox.io/s/react-image-preload-ptosn?file=/src/App.js:157-211
	useEffect(() => {
		// https://fr.reactjs.org/docs/hooks-effect.html
		const loadImage = (image) => {
			return new Promise((resolve, reject) => {
				preLoadImage(meEatingBaozi, resolve, reject);
			});
		};
		Promise.all(IMAGES.map((image) => loadImage(image)))
			.then(() => setImgsLoaded(true))
			.catch((err) => console.log("Failed to load images", err));
	}, []);

	let baozi = "eating baozi";
	if (imgsLoaded) {
		baozi = (
			<button className={styles.baozi} onClick={handleBaoziClick}>
				eating baozi
			</button>
		);
	}

	function handleBaoziClick() {
		if (!click) {
			setClick(true);
			setTimeout(setBackNormalAvatar, 2500);
		}
	}

	function setBackNormalAvatar() {
		setClick(false);
	}
	const isLink = props.isLink;
	var bio = (
		<span>
			Hi! I’m Nicolas – full stack software engineer based in France. My main
			areas of interest are developer tools, privacy tech, applied cryptograhy, decentralized identity and distributed systems. I also love {baozi}.
		</span>
	);
	var content;
	if (isLink) {
		content = (
			<p className={styles.bioContent}>
				{bio}
				{"  "}
				<Link className={styles.arrow} to="/about">
					&rarr;
				</Link>
			</p>
		);
	} else {
		content = <p className={styles.bioContent}>{bio}</p>;
	}
	return (
		<div className={styles.bioContentContainer}>
			<div className={styles.avatarContainer}>
				<img
					className={styles.avatar}
					src={!click ? meNormal : meEatingBaozi}
					alt="Oops, the profile pic did not load! Try refreshing the page."
				/>
			</div>
			<div className={styles.bioContainer}>{content}</div>
		</div>
	);
};

export default BioContent;

BioContent.propTypes = {
	isLink: PropTypes.bool,
};
