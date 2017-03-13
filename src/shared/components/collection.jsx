import React from "react";
import {observer} from "mobx-react";
import Cycle from './cycle';

export default observer(({cycles}) => (<section>
  {cycles.map(item => <Cycle key={item.id} cycle={item} />)}
</section>));
