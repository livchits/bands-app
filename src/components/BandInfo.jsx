import * as React from 'react';
import { useParams } from 'react-router';

function BandInfo(props) {
  const { id } = useParams();
  return <div>Banda {id}</div>;
}

export default BandInfo;
