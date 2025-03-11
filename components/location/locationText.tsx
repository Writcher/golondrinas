import { Button, Divider, styled } from "@mui/material";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useTranslations } from "next-intl";

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

export default function LocationText() {

    const translation = useTranslations('location');

    return (
        <>
            <Root>
                <Divider
                    sx={{
                        "&::before, &::after": {
                            borderColor: "#facc15",
                            borderWidth: "2px"
                        },
                    }}
                >
                    <h2 className="text-base md:text-2xl font-medium">{translation('title1')}</h2>
                </Divider>
                <h3 className="text-xs md:text-base md:mb-12">{translation('text1')}</h3>
                <Divider
                    sx={{
                        "&::before, &::after": {
                            borderColor: "#facc15",
                            borderWidth: "2px"
                        },
                    }}
                >
                    <h2 className="text-base md:text-2xl font-medium">{translation('title2')}</h2>
                </Divider>
                <h3 className="text-xs md:text-base">{translation('text2')}</h3>
                <Divider
                    sx={{
                        borderColor: '#facc15',
                        borderWidth: "2px"
                    }}
                />
                <Button
                    variant="contained"
                    disableElevation
                    fullWidth
                    endIcon={<FmdGoodIcon className="!text-black" />}
                    className="!text-black !bg-yellow-400 hover:!bg-yellow-500"
                    component="a"
                    href="https://maps.app.goo.gl/rVyQTFkB5ejYAsAt9"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Google Maps
                </Button>
            </Root>
        </>
    )
}