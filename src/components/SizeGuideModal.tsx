import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Ruler } from "lucide-react"

export const SizeGuideModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Ruler className="h-4 w-4" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Size Guide</DialogTitle>
          <DialogDescription>
            Find your perfect fit with our comprehensive size guide
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-8 mt-6">
          {/* Clothing Sizes */}
          <div>
            <h3 className="font-serif text-lg mb-4">Clothing</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b">
                  <tr className="text-left">
                    <th className="pb-3 pr-4">Size</th>
                    <th className="pb-3 pr-4">Bust (in)</th>
                    <th className="pb-3 pr-4">Waist (in)</th>
                    <th className="pb-3 pr-4">Hip (in)</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 pr-4 font-medium">XS</td>
                    <td className="py-3 pr-4">31-32</td>
                    <td className="py-3 pr-4">24-25</td>
                    <td className="py-3 pr-4">34-35</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">S</td>
                    <td className="py-3 pr-4">33-34</td>
                    <td className="py-3 pr-4">26-27</td>
                    <td className="py-3 pr-4">36-37</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">M</td>
                    <td className="py-3 pr-4">35-36</td>
                    <td className="py-3 pr-4">28-29</td>
                    <td className="py-3 pr-4">38-39</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">L</td>
                    <td className="py-3 pr-4">37-39</td>
                    <td className="py-3 pr-4">30-32</td>
                    <td className="py-3 pr-4">40-42</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">XL</td>
                    <td className="py-3 pr-4">40-42</td>
                    <td className="py-3 pr-4">33-35</td>
                    <td className="py-3 pr-4">43-45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pants Sizes */}
          <div>
            <h3 className="font-serif text-lg mb-4">Pants</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b">
                  <tr className="text-left">
                    <th className="pb-3 pr-4">Size</th>
                    <th className="pb-3 pr-4">Waist (in)</th>
                    <th className="pb-3 pr-4">Hip (in)</th>
                    <th className="pb-3 pr-4">Inseam (in)</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 pr-4 font-medium">24</td>
                    <td className="py-3 pr-4">24</td>
                    <td className="py-3 pr-4">34</td>
                    <td className="py-3 pr-4">32</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">26</td>
                    <td className="py-3 pr-4">26</td>
                    <td className="py-3 pr-4">36</td>
                    <td className="py-3 pr-4">32</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">28</td>
                    <td className="py-3 pr-4">28</td>
                    <td className="py-3 pr-4">38</td>
                    <td className="py-3 pr-4">32</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">30</td>
                    <td className="py-3 pr-4">30</td>
                    <td className="py-3 pr-4">40</td>
                    <td className="py-3 pr-4">32</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">32</td>
                    <td className="py-3 pr-4">32</td>
                    <td className="py-3 pr-4">42</td>
                    <td className="py-3 pr-4">32</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Measurement Guide */}
          <div className="bg-secondary p-6 space-y-4">
            <h3 className="font-serif text-lg">How to Measure</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Bust:</strong> Measure around the fullest part of your bust</li>
              <li><strong className="text-foreground">Waist:</strong> Measure around the narrowest part of your waist</li>
              <li><strong className="text-foreground">Hip:</strong> Measure around the fullest part of your hips</li>
              <li><strong className="text-foreground">Inseam:</strong> Measure from the crotch to the bottom of your ankle</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}