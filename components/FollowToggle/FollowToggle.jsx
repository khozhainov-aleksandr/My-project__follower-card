import React, { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const FollowToggle = () => {
  const [followers, setFollowers] = useState(83);
  const [following, setFollowing] = useState(4389);
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
