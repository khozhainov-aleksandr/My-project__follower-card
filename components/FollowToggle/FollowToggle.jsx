import React, { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const FollowToggle = ({followersNumber, followingNumber}) => {
  const [followers, setFollowers] = useState(followersNumber);
  const [following, setFollowing] = useState(followingNumber);
  const [alignment, setAlignment] = useState('Followers');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      className="mainToggle"
      value={alignment}
      onChange={handleChange}
      exclusive
    >
      <ToggleButton value="Followers">
        {`${followers} Followers`}
      </ToggleButton>

      <ToggleButton value="Following">
        {`${following} Following`}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
