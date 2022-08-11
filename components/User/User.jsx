import React from "react";
import Avatar from '@mui/material/Avatar';
import { FollowButton } from "../FollowButton";
import styles from './User.module.scss';

export const User = ({ title, description }) => {
  return (
    <div className={styles.user}>
      <div className={styles.photoAndDescryWrapper}>
        <Avatar
          className={styles.avatar}
          src={`./picture/${title}.jpg`}
          alt={`user ${title}, avatar`}
        />
        <div className={styles.descryWrapper}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      
      <FollowButton />
    </div>
  );
};
