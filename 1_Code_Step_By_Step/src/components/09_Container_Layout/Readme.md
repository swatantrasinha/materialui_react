Container Layout : use to manage Layout as per width :
- xs
- sm
- md
- lg

when we write :
<Container>
    <h2>Lets check </h2>
</Container>
here it will take h2 width as 1280 as it takes max-width by default as lg(large) 
to change we need to specify ==> maxWidth="md" - it will take medium width (960)- see below:
<Container style={{backgroundColor:'cyan'}} maxWidth="md">
    <h2> This width is of :  md </h2>
</Container>
======================================================================================================

## Use of Fixed => takes width as lg and keeps changing width as per screen size
        <Container style={{backgroundColor:'cyan'}} fixed>
              <h2> This width is of : Fixed </h2>
          </Container>
======================================================================================================          

## Note : This Container Layout is responsive




