import React, { useEffect, useState } from 'react'

import { MainNavUI } from "./MainNavUI";

import { mainNavItems } from "./data/MainNavItems.data";

export default function MainNav() {
  
  return (
    <MainNavUI items={mainNavItems}/>
  )
}
