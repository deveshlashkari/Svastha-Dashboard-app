import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import InsertLinkOutlinedIcon from "@material-ui/icons/InsertLinkOutlined";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

const useStyles = makeStyles({
  bottomRoot: {},
});

export default function Footer(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  useEffect(() => {
    if (props.selectedIndex) {
      if (props.selectedIndex !== null || props.selectedIndex !== "") {
        setValue(Number(props.selectedIndex));
      }
    }
  });

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      router.push("/");
    }
    if (newValue === 1) {
      router.push("/search");
    }
    if (newValue === 2) {
      router.push("/externalLinks");
    }
    if (newValue === 3) {
      router.push("/contribute");
    }
  };

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={handleNavigationChange}
        showLabels
        style={{
          justifyContent: "space-around",
          background: "#EDEDED",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction
          label="Twitter Search"
          icon={<SearchOutlinedIcon />}
        />
        <BottomNavigationAction
          label="External Links"
          icon={<InsertLinkOutlinedIcon />}
        />
        <BottomNavigationAction label="Contribute" icon={<EmojiPeopleIcon />} />
      </BottomNavigation>
    </div>
  );
}
