import React, { useState } from "react";
import Button from '@mui/material/Button';
import styles from './FollowButton.module.scss';

export const FollowButton = () => {
  const [condition, setCondition] = useState(false);
  const OUTLINED = {
    status: 'outlined',
    title: 'Unfollow'
  };

  const CONTAINED = {
    status: 'contained',
    title: 'Follow'
  };

  const checkStatus = check(CONTAINED.status, OUTLINED.status)
  const checkTitle = check(CONTAINED.title, OUTLINED.title)

    function check(firstValue, secondValue) {
      return condition ? firstValue : secondValue;
    }

    function changeCondition() {
      setCondition(state => !state)
    }

  return (
    <Button
      className={`${styles.btn} ${styles[checkStatus]}`}
      variant={checkStatus}
      onClick={changeCondition}
    >
      {checkTitle}
    </Button>
  );
};
