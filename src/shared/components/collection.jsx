import React from "react";
import {observer} from "mobx-react";
import Cycle from './cycle';
export default observer(({cycles}) => (<section>
  {cycles.forEach(item => <Cycle config={item} />)}
</section>));
