'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetPortal,
} from "@/components/ui/sheet"
import { CheckCircle, Facebook, Globe, Instagram, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/globe.svg"
              alt="Anocab Logo"
              width={50}
              height={50}
              className="h-12 w-12"
            />
            <span className="text-2xl font-semibold">Anocab</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              HOME
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              CLIENTS
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              PRODUCTS
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              WIRE CALCULATOR
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              ABOUT US
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              CAREERS
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="default" className="hidden sm:inline-flex">
              Download Brochure
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetPortal>
                <SheetContent>
                  <nav className="flex flex-col gap-4">
                    <Link href="#" className="text-sm font-medium hover:text-primary">
                      HOME
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary">
                      CLIENTS
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary">
                      PRODUCTS
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary">
                      WIRE CALCULATOR
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary">
                      ABOUT US
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary">
                      CAREERS
                    </Link>
                    <Button variant="default" className="mt-4">
                      Download Brochure
                    </Button>
                  </nav>
                </SheetContent>
              </SheetPortal>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Product Image */}
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/Anocab-New-brochure-design-final-3-33x300.png"
              alt="MultiStrand Single Core Copper Cable"
              width={50}
              height={50}
              className="h-auto w-full max-w-[50px] md:max-w-[50px]"
            />
            <Button size="lg" className="w-full max-w-md">
              CLICK TO VIEW PRICE
            </Button>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">
                MultiStrand Single Core Copper Cable
              </h1>
              <p className="mt-2 text-muted-foreground">
                Suitable For Fixed Installation in Residential, and Industrial
                Application.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>High quality multilayer PVC having greater IR Value</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>REACH and RoHS Compliant Cable</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Flame retardant cable with higher oxygen index</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Anti-Rodent, Anti-Termite</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>100% Pure Electrolytic grade Copper</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Super Flexible conductor</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>100% Conductivity</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Reference:", value: "IS 694:2010" },
                    { label: "Voltage Grade:", value: "Up to and including 1100V" },
                    { label: "Conductor:", value: "Electrolytic Grade Copper class – 2, 5, as per IS: 8130:2013" },
                    { label: "Insulation:", value: "PVC confirming to IS-5831 and Formulated With FR Properties and Heat resistance up to 85 °C . FRLSH & ZHFR insulation Type A/C 70/85°C." }
                  ].map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 p-5">
        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Important Links</h3>
              <nav className="mt-4 flex flex-col gap-2">
                {["Home", "About Us", "Products", "Contact Us"].map((link, index) => (
                  <Link key={index} href="#" className="hover:text-primary">
                    {link}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold">About Anode Electric</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Anode Electric Pvt. Ltd. is one of the leading Indian Cable
                manufacturers, manufacturing all types of cables specializing in
                Power Cables, Control Cables, House Wires and Copper Flexible
                Cables.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <address className="mt-4 space-y-2 not-italic text-sm text-muted-foreground">
                <p>Plot. No. 10, IT Park</p>
                <p>Bargi Hills, Jabalpur, Madhya Pradesh</p>
              </address>
              <div className="mt-4 flex gap-4">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Globe, label: "Website" },
                  { Icon: Instagram, label: "Instagram" }
                ].map(({ Icon, label }, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            Copyright 2024 | Anode Electric Pvt. Ltd. | All Right Reserved
          </div>
        </div>
      </footer>
    </div>
  )
}
