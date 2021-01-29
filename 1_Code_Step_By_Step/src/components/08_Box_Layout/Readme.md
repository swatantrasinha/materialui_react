## use of Box : wrapper component for most of CSS utility needs
 - import Box and Button
 - use element with Box
 - clone ==> use style with Box
 - use margin and padding  with Box

1. when we add an element inside Box like below : 
<Box>
    <Button>My Button</Button>
</Box>
it adds a <div> wrapper to Button

2. to wrap it in <span> we can do 
 <Box component="span">
    <Button>My Button inside span</Button>
 </Box>

3. to add margin and padding use "m" and "p"
 <Box clone style={{color:'red'}} m={20} p={10}>
            <Button>My Red Button</Button>
</Box>

## Note : If we try to use component and clone together like :
<Box component="span" clone style={{color:'red'}} m={20}>
    <Button>My Red Button</Button>
</Box>
then we will get below warning in console:
Warning: Failed prop type: You can not use the clone and component prop at the same time.

