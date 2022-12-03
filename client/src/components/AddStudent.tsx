import type { FC } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
} from '@chakra-ui/react';
import Select from 'react-select';

const AddStudent: FC<{ isOpen: boolean; size: string; onClose: () => void }> = ({ onClose, isOpen, size }) => {
  const courses = ['csc101', 'hck101', 'phi101'].map((item) => ({ value: item, label: item }));
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size={size}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Add New Student</DrawerHeader>
        <DrawerBody>
          <form className="login-form" method="post" action="#">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl marginTop="1rem">
              <FormLabel>Matric Number</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl marginTop="1rem">
              <FormLabel>Fingerprint</FormLabel>
              <Box shadow="xs" h={240} w={240} margin="1rem auto 0" border="1px solid rgba(0, 0, 0, 0.04)"></Box>
            </FormControl>
            <FormControl marginTop="1rem">
              <FormLabel>Courses</FormLabel>
              <Select
                defaultValue={[courses[2], courses[1]]}
                isMulti
                name="colors"
                options={courses}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </FormControl>
            <Button
              w="100%"
              type="submit"
              bg="var(--bg-primary)"
              color="white"
              marginTop="2rem"
              _hover={{ background: 'var(--bg-primary-light)' }}
            >
              Add student
            </Button>
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default AddStudent;
