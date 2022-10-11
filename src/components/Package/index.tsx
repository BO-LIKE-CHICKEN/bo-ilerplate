import React, { ReactNode } from 'react';
import { Container, List, Item, Name, Version } from './Package.style';

type PackageProps = {
  children: ReactNode;
};

const Package = ({ children }: PackageProps) => {
  const consoleLogHI = () => {
    console.log('HIHI');
  };

  React.useEffect(() => {
    consoleLogHI();
  }, []);

  return <Container>{children}</Container>;
};

Package.List = List;
Package.Item = Item;
Package.Name = Name;
Package.Version = Version;

export default Package;
